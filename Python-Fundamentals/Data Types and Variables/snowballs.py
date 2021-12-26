from sys import maxsize

max_value = - maxsize
max_snow = 0
max_time = 0
max_quality = 0

number_of_snowballs = int(input())
for snowball in range(1, number_of_snowballs + 1):
    snowball_snow = int(input())
    snowball_time = int(input())
    snowball_quality = int(input())

    snowball_value = (snowball_snow / snowball_time) ** snowball_quality
    if snowball_value > max_value:
        max_value = snowball_value
        max_quality = snowball_quality
        max_time = snowball_time
        max_snow = snowball_snow

print(f'{max_snow} : {max_time} = {int(max_value)} ({max_quality})')