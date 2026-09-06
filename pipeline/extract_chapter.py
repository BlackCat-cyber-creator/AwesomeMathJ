import argparse
import json
import os
import pypdf

MANIFEST_PATH = os.path.join(os.path.dirname(__file__), 'catalog_manifest.json')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'extracted')

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

def find_chapter(grade_num, ch_num):
    for g in manifest['grades']:
        if g['grade'] == grade_num:
            for ch in g['chapters']:
                if ch['number'] == ch_num:
                    return g, ch
    return None, None

def extract_chapter(grade_num, ch_num):
    grade_meta, ch_meta = find_chapter(grade_num, ch_num)
    if not grade_meta or not ch_meta:
        print(f"Error: Grade {grade_num} Bab {ch_num} not found in manifest.")
        return
    
    pdf_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', ch_meta.get('pdfFile') or grade_meta['pdfFile']))
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file {pdf_path} does not exist.")
        return
    
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    # Parse page range (e.g. "103-138")
    start_p, end_p = [int(x) for x in ch_meta['pages'].split('-')]
    
    # Search in PDF for the chapter title or start offset
    # Book page 1 usually starts around PDF page 10-15
    print(f"Scanning Grade {grade_num} {ch_meta['title']} (Book pages {start_p}-{end_p}, PDF total {total_pages} pages)...")
    
    # Let's search for the page where chapter header appears
    start_pdf_idx = None
    target_text = f"Bab {ch_num}"
    alt_target = ch_meta['title'].split(':')[1].strip() if ':' in ch_meta['title'] else ch_meta['title']
    
    for idx, page in enumerate(reader.pages):
        text = page.extract_text() or ""
        if (target_text.lower() in text.lower() or alt_target.lower() in text.lower()) and idx > 5:
            # Check if this is the start of the chapter
            start_pdf_idx = idx
            break
            
    if start_pdf_idx is None:
        # Fallback estimate based on typical offset of ~12 pages
        start_pdf_idx = max(0, start_p + 10)
    
    # Approximate length of the chapter
    page_count = (end_p - start_p) + 4
    end_pdf_idx = min(total_pages, start_pdf_idx + page_count)
    
    out_filename = f"grade{grade_num}_bab{ch_num}.txt"
    out_filepath = os.path.join(OUTPUT_DIR, out_filename)
    
    with open(out_filepath, 'w', encoding='utf-8') as out:
        out.write(f"=== {grade_meta['level']} Kelas {grade_num}: {ch_meta['title']} ===\n")
        out.write(f"Source: {grade_meta['pdfFile']} | Pages {start_p}-{end_p}\n\n")
        
        for p in range(start_pdf_idx, end_pdf_idx):
            page_text = reader.pages[p].extract_text() or ""
            out.write(f"\n--- PDF Page {p+1} ---\n")
            out.write(page_text)
            out.write("\n")
            
    print(f"Extracted chapter text saved to: {out_filepath}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Extract textbook chapter from PDF")
    parser.add_argument('--grade', type=int, required=True, help="Grade number (4-12)")
    parser.add_argument('--chapter', type=int, required=True, help="Chapter number")
    args = parser.parse_args()
    extract_chapter(args.grade, args.chapter)
