from collections import deque


def list_manipulator(*args):
    final_list = []
    numbers = deque(args[0])
    second_parameter = args[1]
    third_parameter = args[2]
    if second_parameter == 'add' and third_parameter == 'beginning':
        other_nums = args[3:]
        numbers.extendleft(reversed(other_nums))
    elif second_parameter == 'add' and third_parameter == 'end':
        other_nums = args[3:]
        numbers.extend(other_nums)
    elif second_parameter == 'remove' and third_parameter == 'beginning':
        if len(args) == 3:
            numbers.popleft()
        else:
            numbers_to_remove = int(args[3])
            while numbers_to_remove:
                numbers.popleft()
                numbers_to_remove -= 1
    elif second_parameter == 'remove' and third_parameter == 'end':
        if len(args) == 3:
            numbers.pop()
        else:
            numbers_to_remove = int(args[3])
            while numbers_to_remove:
                numbers.pop()
                numbers_to_remove -= 1
    final_list = [x for x in numbers]
    return final_list


print(list_manipulator([1, 2, 3], "remove", "end"))
