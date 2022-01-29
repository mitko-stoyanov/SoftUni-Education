happiness = input().split()
factor = int(input())

happiness = [int(x) * factor for x in happiness]
mid_level = sum(happiness) / len(happiness)

happy_people = [x for x in happiness if x >= mid_level]
sad_people = [x for x in happiness if x < mid_level]

happy_message = 'Employees are happy!'
sad_message = 'Employees are not happy!'

if len(happy_people) >= len(happiness) / 2:
    print(f'Score: {len(happy_people)}/{len(happiness)}.' + f' {happy_message}')
else:
    print(f'Score: {len(happy_people)}/{len(happiness)}.' + f' {sad_message}')