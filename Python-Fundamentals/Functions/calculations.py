def calculations(com, fp, sp):
    result = 0
    if com == 'multiply':
        result = fp * sp
    elif com == 'divide':
        result = fp // sp
    elif com == 'add':
        result = fp + sp
    elif com == 'subtract':
        result = fp - sp
    return result


command = input()
first_num = int(input())
second_num = int(input())
print(calculations(command, first_num, second_num))