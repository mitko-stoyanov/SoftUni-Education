n, m = input().split()
first_set = set()
second_set = set()

for _ in range(int(n)):
    num = int(input())
    first_set.add(num)

for _ in range(int(m)):
    number = int(input())
    second_set.add(number)

output = first_set.intersection(second_set)
for num in output:
    print(num)