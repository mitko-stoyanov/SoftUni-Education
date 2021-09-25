from collections import deque

working_bees = deque([int(x) for x in input().split()])
nectar = [int(x) for x in input().split()]
symbols = deque(input().split())
total_honey = 0

while working_bees and nectar:
    first_bee = working_bees.popleft()
    last_nectar = nectar.pop()

    if last_nectar >= first_bee:
        operation = symbols.popleft()
        current_honey = 0
        if operation == '+':
            current_honey = first_bee + last_nectar
        elif operation == '-':
            current_honey = first_bee - last_nectar
        elif operation == '*':
            current_honey = first_bee * last_nectar
        elif operation == '/':
            if last_nectar > 0:
                current_honey = first_bee / last_nectar
        total_honey += abs(current_honey)
        if last_nectar == first_bee:
            pass
    else:
        working_bees.appendleft(first_bee)
        continue

print(f'Total honey made: {total_honey}')
if working_bees:
    print(f'Bees left: {", ".join([str(x) for x in working_bees])}')
if nectar:
    print(f'Nectar left: {", ".join([str(x) for x in nectar])}')