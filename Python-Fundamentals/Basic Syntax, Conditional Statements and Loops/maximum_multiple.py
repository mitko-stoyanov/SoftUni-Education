divisor = int(input())
bound = int(input())
max_multiplier = 0

for current_number in range(divisor + 1, bound + 1):
    if current_number % divisor == 0:
        max_multiplier = current_number
print(max_multiplier)