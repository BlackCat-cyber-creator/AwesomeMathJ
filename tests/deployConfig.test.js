import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const vercel = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../vercel.json'), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));

describe('Konfigurasi deploy Vercel', () => {
  it('build menjalankan prerender SEO', () => {
    expect(pkg.scripts.build).toContain('scripts/prerender.mjs');
    expect(vercel.buildCommand).toBe('npm run build');
  });

  it('dengan cleanUrls, tujuan rewrite SPA tidak boleh berakhiran .html (menyebabkan 404 pada /quest, /teacher)', () => {
    expect(vercel.cleanUrls).toBe(true);
    for (const r of vercel.rewrites || []) {
      expect(r.destination.endsWith('.html')).toBe(false);
    }
    expect(vercel.rewrites.some((r) => r.destination === '/app')).toBe(true);
  });
});
