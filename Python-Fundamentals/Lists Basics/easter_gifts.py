name_of_gifts = input()
gifts_list = name_of_gifts.split()
command = input()

while not command == 'No Money':
    command_list = command.split()
    if command_list[0] == 'OutOfStock':
        for i in range(len(gifts_list)):
            if gifts_list[i] == command_list[1]:
                gifts_list[i] = 'None'
    elif command_list[0] == 'Required':
        for i in range(len(gifts_list)):
            if int(command_list[2]) == i:
                gifts_list[i] = command_list[1]
                break
    elif command_list[0] == 'JustInCase':
        gifts_list[len(gifts_list) - 1] = command_list[1]

    command = input()

final_list = []
for element in range(0, len(gifts_list)):
    if not gifts_list[element] == 'None':
        final_list.append(gifts_list[element])

print(' '.join(final_list))