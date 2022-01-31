n = int(input())
synonym_dict = {}

for _ in range(n):
    word = input()
    synonym = input()
    if word not in synonym_dict:
        synonym_dict[word] = []
    synonym_dict[word].append(synonym)

for key, value in synonym_dict.items():
    print(f'{key} - {", ".join(value)}')