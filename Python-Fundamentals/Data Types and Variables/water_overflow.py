capacity = 255
n = int(input())
current_liters = 0

for line in range(1, n + 1):
    liter = int(input())
    if current_liters + liter <= capacity:
        current_liters += liter
    else:
        print('Insufficient capacity!')
print(current_liters)