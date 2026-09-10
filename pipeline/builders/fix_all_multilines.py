with open('pipeline/builders/expand_grade10.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if line.strip().startswith('"**Langkah Penyelesaian Terstruktur:') and not line.strip().endswith('",') and not line.strip().endswith('")'):
        # This is a multiline string starting with a single double quote
        # Collect lines until a line ends with ", or ")
        block = [line.lstrip().lstrip('"')]
        i += 1
        while i < len(lines):
            subline = lines[i]
            if subline.rstrip().endswith('",') or subline.rstrip().endswith('")'):
                # End of string
                closing = subline.rstrip()[-2:]
                content_part = subline.rstrip()[:-2].rstrip('"')
                block.append(content_part)
                # Combine block with \n
                combined_content = "\\n".join(b.strip() for b in block if b.strip())
                # escape single backslashes in math if needed
                new_lines.append(f'        "{combined_content}"{closing}\n')
                break
            else:
                block.append(subline.strip())
                i += 1
    else:
        new_lines.append(line)
    i += 1

with open('pipeline/builders/expand_grade10.py', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Multiline strings converted to single line with \\n!")
