import json
import os
import re
import sys

# Ensure UTF-8 output if possible, or fallback to ascii
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

MANIFEST_PATH = os.path.join(os.path.dirname(__file__), 'catalog_manifest.json')

with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

print("\n" + "="*85)
print(f"       CURRICULUM PIPELINE STATUS: OFFICIAL TEXTBOOK ALIGNMENT")
print("="*85)
print(f"{'Grade':<10} | {'Level':<6} | {'Target Ch':<10} | {'Active Ch':<10} | {'Q Total':<8} | {'PDF Ingested':<14} | {'Status':<12}")
print("-" * 85)

for g in manifest['grades']:
    grade_num = g['grade']
    level = g['level']
    target_chapters = len(g['chapters'])
    pdf_path = os.path.join(os.path.dirname(__file__), '..', g['pdfFile'])
    pdf_exists = f"[OK] {os.path.getsize(pdf_path)//(1024*1024)}MB" if os.path.exists(pdf_path) else "[MISSING]"
    
    data_path = os.path.join(os.path.dirname(__file__), '..', g['dataFile'])
    active_chapters = 0
    q_count = 0
    status_label = "PENDING"
    
    if os.path.exists(data_path):
        with open(data_path, 'r', encoding='utf-8') as df:
            content = df.read()
            ch_matches = re.findall(r'["\']?id["\']?\s*:\s*["\']([^"\']+)["\'],\s*["\']?title["\']?\s*:\s*["\']([^"\']+)["\']', content)
            active_chapters = len(ch_matches)
            q_matches = re.findall(r'["\']?question["\']?\s*:\s*["\']', content)
            q_count = len(q_matches)
            
            if active_chapters == target_chapters:
                first_ch_manifest = g['chapters'][0]['title'].split(':')[0]
                if first_ch_manifest in content or "Bab 1" in content:
                    status_label = "[ALIGNED]"
                else:
                    status_label = "[MISALIGNED]"
            else:
                status_label = f"[DIFF {active_chapters}/{target_chapters}]"
    
    print(f"Kelas {grade_num:<4} | {level:<6} | {target_chapters:<10} | {active_chapters:<10} | {q_count:<8} | {pdf_exists:<14} | {status_label:<12}")

print("="*85 + "\n")
