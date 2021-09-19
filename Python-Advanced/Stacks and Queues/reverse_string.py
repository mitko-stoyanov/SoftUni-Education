string = input()

stack = []

for letter in string:
    stack.append(letter)

result = ''

while len(stack) > 0:
    result += stack.pop()
print(result)