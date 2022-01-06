def sum_numbers(num1, num2):
    return num1 + num2


def subtract(num1, num3):
    return num1 - num3


number1 = int(input())
number2 = int(input())
number3 = int(input())

sum = sum_numbers(number1, number2)
final_result = subtract(sum, number3)
print(final_result)