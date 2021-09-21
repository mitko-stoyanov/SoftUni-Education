stack = []
parentheses = input()
data = {'(': ')', '[': ']', '{': '}'}

is_balanced = True
for symbol in parentheses:
    if symbol in '([{':
        stack.append(symbol)
    else:
        if len(stack) == 0:
            is_balanced = False
            break
        last_opening_bracket = stack.pop()
        if not data[last_opening_bracket] == symbol:
            is_balanced = False
            break

if is_balanced and len(stack) == 0:
    print('YES')
else:
    print('NO')