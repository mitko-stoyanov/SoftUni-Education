def read_matrix(size):
    matrix = []
    for _ in range(size):
        row = list(input())
        matrix.append(row)
    return matrix


def check_for_burrows(size):
    for row in range(size):
        for col in range(size):
            if matrix[row][col] == 'B':
                return True
            return False


def find_burrows(size):
    burrows_idx = []
    for row in range(size):
        for col in range(size):
            if matrix[row][col] == 'B':
                burrows_idx.append([row, col])
    return burrows_idx


def find_snake(size):
    for row in range(size):
        for col in range(size):
            if matrix[row][col] == 'S':
                return [row, col]


def check_commands(row, col, current_command):
    if current_command == 'up':
        row -= 1
    elif current_command == 'down':
        row += 1
    elif current_command == 'left':
        col -= 1
    elif current_command == 'right':
        col += 1
    return [row, col]


def check_index(row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True
    return False


n = int(input())
matrix = read_matrix(n)
eaten_food = 0

current_row, current_col = find_snake(n)
while True:
    if eaten_food >= 10:
        print('You won! You fed the snake.')
        break
    command = input()
    matrix[current_row][current_col] = '.'
    next_row, next_col = check_commands(current_row, current_col, command)
    if check_index(next_row, next_col):
        # matrix[current_row][current_col] = '.'
        if matrix[next_row][next_col] == '*':
            eaten_food += 1
        elif matrix[next_row][next_col] == 'B':
            all_burrows = find_burrows(n)
            matrix[next_row][next_col] = '.'
            next_row, next_col = all_burrows[1]
        matrix[next_row][next_col] = 'S'
    else:
        print('Game over!')
        break
    current_row, current_col = next_row, next_col

print(f'Food eaten: {eaten_food}')

[print(''.join(element)) for element in matrix]