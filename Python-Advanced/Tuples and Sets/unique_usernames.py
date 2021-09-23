n = int(input())
all_names = set()

for _ in range(n):
    name = input()
    all_names.add(name)

for name in all_names:
    print(name)