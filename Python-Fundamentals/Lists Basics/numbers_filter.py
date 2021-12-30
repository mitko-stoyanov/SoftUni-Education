n = int(input())
global_list = []
new_list = []
for num in range(1, n + 2):
    number = input()
    if num <= n:
        int_number = int(number)
        global_list.append(int_number)
    else:
        if number == 'even':
            for element in global_list:
                if element % 2 == 0 or element == 0:
                    new_list.append(element)
        elif number == 'odd':
            for element in global_list:
                if element % 2 == 1:
                    new_list.append(element)
        elif number == 'negative':
            for element in global_list:
                if element < 0:
                    new_list.append(element)
        else:
            for element in global_list:
                if element >= 0:
                    new_list.append(element)

print(new_list)