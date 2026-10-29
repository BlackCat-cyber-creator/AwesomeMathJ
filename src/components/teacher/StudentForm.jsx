import React, { useState } from 'react';
import { STUDENT_TRACKS } from '../../utils/questBuilder';

const GRADES = [4, 5, 6, 7, 8, 9, 10, 11, 12];

const EMPTY_STUDENT = { name: '', grade: 7, track: 'reguler', school: '', parentPhone: '', notes: '' };

/**
 * Form tambah / ubah murid. `student` kosong = murid baru.
 */
export function StudentForm({ student = null, onSave, onCancel }) {
  const [form, setForm] = useState(() => ({ ...EMPTY_STUDENT, ...(student || {}) }));
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Nama murid wajib diisi.');
      return;
    }
    setIsSaving(true);
    setError('');
    try {
      await onSave({
        ...form,
        name: form.name.trim(),
        grade: Number(form.grade),
        school: form.school.trim(),
        parentPhone: form.parentPhone.trim(),
        notes: form.notes.trim()
      });
    } catch (err) {
      setError(err.message || 'Gagal menyimpan murid.');
      setIsSaving(false);
    }
  };

  return (
    <form className="editorial-card studio-card" onSubmit={handleSubmit}>
      <h3 className="studio-card-title">{student ? 'Ubah Data Murid' : 'Tambah Murid'}</h3>

      <div className="studio-form-grid">
        <label className="studio-field studio-field-wide">
          <span>Nama murid *</span>
          <input className="form-select" value={form.name} onChange={update('name')} placeholder="Contoh: Nadia Safira" autoFocus />
        </label>

        <label className="studio-field">
          <span>Kelas</span>
          <select className="form-select" value={form.grade} onChange={update('grade')}>
            {GRADES.map((g) => <option key={g} value={g}>Kelas {g}</option>)}
          </select>
        </label>

        <label className="studio-field">
          <span>Jalur belajar</span>
          <select className="form-select" value={form.track} onChange={update('track')}>
            {STUDENT_TRACKS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </select>
        </label>

        <label className="studio-field">
          <span>Sekolah</span>
          <input className="form-select" value={form.school} onChange={update('school')} placeholder="Contoh: SMP Immanuel" />
        </label>

        <label className="studio-field">
          <span>No. WhatsApp orang tua</span>
          <input className="form-select" value={form.parentPhone} onChange={update('parentPhone')} placeholder="08xxxxxxxxxx" inputMode="tel" />
        </label>

        <label className="studio-field studio-field-wide">
          <span>Catatan perkembangan</span>
          <textarea className="form-select" rows={3} value={form.notes} onChange={update('notes')} placeholder="Materi yang sudah dikuasai, yang perlu dilatih, dll." />
        </label>
      </div>

      {error && <p className="studio-error">{error}</p>}

      <div className="studio-actions">
        <button type="submit" className="btn btn-royal" disabled={isSaving}>
          {isSaving ? 'Menyimpan...' : 'Simpan'}
        </button>
        <button type="button" className="btn btn-outline" onClick={onCancel} disabled={isSaving}>
          Batal
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
