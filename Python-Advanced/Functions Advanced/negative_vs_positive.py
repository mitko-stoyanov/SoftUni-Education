numbers = [int(x) for x in input().split()]

positive_sum = sum(filter(lambda x: x>0, numbers))
negative_sum = sum(filter(lambda x: x<0, numbers))
print(negative_sum)
print(positive_sum)
if abs(negative_sum) > positive_sum:
    print('The negatives are stronger than the positives')
else:
    print('The positives are stronger than the negatives')