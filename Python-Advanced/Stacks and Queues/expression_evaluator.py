from collections import deque

arithmetic_expressions = {
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '*': lambda a, b: a * b,
    '/': lambda a, b: a // b

}
characters = input().split()
numbers = deque()
for ch in characters:
    if ch in arithmetic_expressions:
        result = numbers.popleft()
        current_expression = arithmetic_expressions[ch]
        while numbers:
            number = numbers.popleft()
            result = arithmetic_expressions[ch](result, number)
        numbers.append(result)
    else:
        numbers.append(int(ch))

print(numbers.popleft())