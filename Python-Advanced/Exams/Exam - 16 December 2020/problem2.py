def read_matrix(size):
    matrix = []
    for _ in range(size):
        row = list(input())
        matrix.append(row)
    return matrix


def find_player_position():
    for row in range(len(matrix)):
        for col in range(len(matrix)):
            if matrix[row][col] == 'P':
                return row, col


def check_next_position(command, row, col):
    if command == 'down':
        row += 1
    elif command == 'up':
        row -= 1
    elif command == 'left':
        col -= 1
    elif command == 'right':
        col += 1
    return row, col


def check_index(row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True
    return False


initial_string = input()
n = int(input())
matrix = read_matrix(n)
player_row, player_col = find_player_position()
number_of_commands = int(input())
for _ in range(number_of_commands):
    command = input()
    next_row, next_col = check_next_position(command, player_row, player_col)
    if check_index(next_row, next_col):
        matrix[player_row][player_col] = '-'
        if not matrix[next_row][next_col] == '-':
            initial_string += matrix[next_row][next_col]
        matrix[next_row][next_col] = 'P'
        player_row, player_col = next_row, next_col
    else:
        if len(initial_string) > 0:
            initial_string = initial_string[:-1]


print(initial_string)
for element in matrix:
    print(''.join(element))
