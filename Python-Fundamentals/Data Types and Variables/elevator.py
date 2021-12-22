from math import ceil

people = int(input())
capacity = int(input())
counter_courses = ceil(people / capacity)
print(counter_courses)