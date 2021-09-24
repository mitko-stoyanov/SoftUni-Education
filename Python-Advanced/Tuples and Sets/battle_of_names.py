n = int(input())
odd_numbers = set()
even_numbers = set()

for i in range(1, n + 1):
    value = 0
    total_sum = sum([value + ord(x) for x in input()]) // i
    if total_sum % 2 == 0:
        even_numbers.add(total_sum)
    else:
        odd_numbers.add(total_sum)

sum_first_set = sum(odd_numbers)
sum_second_set = sum(even_numbers)

if sum_second_set == sum_first_set:
    union = [str(x) for x in odd_numbers.union(even_numbers)]
    print(', '.join(union))
elif sum_first_set > sum_second_set:
    different = [str(x) for x in odd_numbers.difference(even_numbers)]
    print(', '.join(different))
elif sum_second_set > sum_first_set:
    symmetric_diff = [str(x) for x in odd_numbers.symmetric_difference(even_numbers)]
    print(', '.join(symmetric_diff))
