data = {}
line = [float(x) for x in input().split()]

for element in line:
    if element not in data:
        data[element] = 1
    else:
        data[element] += 1

for key, value in data.items():
    print(f'{key} - {value} times')