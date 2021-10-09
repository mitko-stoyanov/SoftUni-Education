def best_list_pureness(*args):
    numbers = args[0]
    k = args[1]
    best_pureness = 0
    index = 0
    current_pureness = 0
    for i in range(k + 1):
        current_pureness = 0
        for j in range(len(numbers)):
            current_pureness += numbers[j] * j
        if current_pureness > best_pureness:
            best_pureness = current_pureness
            index = i
        last_num = numbers.pop()
        numbers.insert(0, last_num)

    return f'Best pureness {best_pureness} after {index} rotations'


print(best_list_pureness([7, 9, 2, 5, 3, 4], 3))