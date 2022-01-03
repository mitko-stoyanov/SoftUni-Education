cards = input()
count = int(input())
cards_list = cards.split()

half_size = len(cards_list) // 2
for time in range(count):
    left_side = cards_list[:half_size]
    right_side = cards_list[half_size:]
    new_list = []
    for index in range(half_size):
        new_list.append(left_side[index])
        new_list.append(right_side[index])
    cards_list = new_list
print(new_list)