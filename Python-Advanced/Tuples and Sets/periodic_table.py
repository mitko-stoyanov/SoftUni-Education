n = int(input())
all_elements = set()

for _ in range(n):
    compounds = input().split()
    for el in compounds:
        all_elements.add(el)

[print(x) for x in all_elements]