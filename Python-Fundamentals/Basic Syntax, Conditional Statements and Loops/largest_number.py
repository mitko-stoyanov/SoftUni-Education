from sys import maxsize

num_1 = int(input())
num_2 = int(input())
num_3 = int(input())
max_num = 0

if num_1 > - maxsize:
    max_num = num_1
if num_2 > num_1:
    max_num = num_2
if num_3 > num_2:
    max_num = num_3

print(max_num)