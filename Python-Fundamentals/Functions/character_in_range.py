def character_in_range(character_1, character_2):
    character_1_int = ord(character_1)
    character_2_int = ord(character_2)
    for i in range(character_1_int, character_2_int):
        current_char = i
        list.append(chr(current_char))
    list.pop(0)
    return ' '.join(list)


character_1 = input()
character_2 = input()
list = []
print(character_in_range(character_1, character_2))