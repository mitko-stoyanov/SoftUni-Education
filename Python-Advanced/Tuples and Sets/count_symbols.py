text = input()
all_chars = {}

for ch in text:
    if ch not in all_chars:
        all_chars[ch] = 1
    else:
        all_chars[ch] += 1

for key, value in sorted(all_chars.items()):
    print(f'{key}: {value} time/s')