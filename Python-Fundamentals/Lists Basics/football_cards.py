cards = input()
team_a_counter = 11
team_b_counter = 11
new_list = cards.split(' ')

list_to_check = []
is_empty = False
under_seven = False

for element in new_list:
    if len(new_list) == 0:
        is_empty = True
        break
    if element in list_to_check:
        continue
    else:
        list_to_check.append(element)
        if 'A' in element:
            team_a_counter -= 1
        elif 'B' in element:
            team_b_counter -= 1
    if team_b_counter < 7 or team_a_counter < 7:
        under_seven = True
        break
if is_empty:
    print(f"Team A - 11; Team B - 11")
else:
    print(f"Team A - {team_a_counter}; Team B - {team_b_counter}")
    if under_seven:
        print('Game was terminated')