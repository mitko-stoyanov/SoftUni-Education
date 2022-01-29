notes = [0] * 10
command = input()

while not command == 'End':
    importance,text = command.split('-')
    current_index = int(importance) - 1
    notes[current_index] = text
    command = input()

print([el for el in notes if not el == 0])