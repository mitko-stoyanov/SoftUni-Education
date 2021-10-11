from collections import Counter


def numbers_searching(*args):
    final_list = []
    all_nums = sorted(args)
    all_nums_new = []
    for number in all_nums:
        if number not in all_nums_new:
            all_nums_new.append(number)
    missing_num = None
    duplicates = [key for key in Counter(args).keys() if Counter(args)[key] > 1]
    current_num = all_nums[0]
    for idx in range(0, len(all_nums_new)):
        if all_nums_new[idx + 1] - all_nums_new[idx] == 1:
            continue
        missing_num = all_nums_new[idx] + 1
        break
    final_list.append(missing_num)
    final_list.append(sorted(duplicates))
    return final_list


print(numbers_searching(50, 50, 47, 47, 48, 45, 49, 44, 47, 45, 44, 44, 48, 44, 48))