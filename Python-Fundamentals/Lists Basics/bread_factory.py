events = input()
events_list = events.split('|')
initial_energy = 100
initial_coins = 100
bankrupt = False

for event in events_list:
    action_list = event.split('-')
    if action_list[0] == 'rest':
        if initial_energy == 100:
            print("You gained 0 energy.")
        else:
            initial_energy += int(action_list[1])
            if initial_energy > 100:
                initial_energy = 100  # initial_energy -= int(action_list[1])
                print(f'You gained {100 - initial_energy} energy.')
            else:
                print(f'You gained {action_list[1]} energy.')
        print(f'Current energy: {initial_energy}.')
    elif action_list[0] == 'order':
        initial_energy -= 30
        if initial_energy >= 0:
            initial_coins += int(action_list[1])
            print(f'You earned {action_list[1]} coins.')
        else:
            initial_energy += 80  # връщам тези 30 и добавям още 50 (няма поръчка)
            print('You had to rest!')
    else:
        initial_coins -= int(action_list[1])
        if initial_coins > 0:
            print(f'You bought {action_list[0]}.')
        else:
            print(f'Closed! Cannot afford {action_list[0]}.')
            bankrupt = True
            break

if not bankrupt:
    print(f'Day completed!')
    print(f'Coins: {initial_coins}')
    print(f'Energy: {initial_energy}')