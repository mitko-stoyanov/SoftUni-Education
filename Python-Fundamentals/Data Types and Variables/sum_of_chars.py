n = int(input())
result = 0

for symbol in range(n):
    symbol_ord = input()
    result += ord(symbol_ord)

print(f"The sum equals: {result}")