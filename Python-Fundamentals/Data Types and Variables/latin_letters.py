n = int(input())
for i in range(0, n):
    for j in range(0, n):
        for k in range(0, n):
            print(f'{chr(i + 97)}{chr(j + 97)}{chr(k + 97)}')