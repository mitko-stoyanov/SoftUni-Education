def read_matrix(n, bombs):
    matrix = []
    for _ in range(n):
        row = [None] * n
        matrix.append(row)
    for element in bombs:
        row_bomb = int(element[0])
        col_bomb = int(element[1])
        matrix[row_bomb][col_bomb] = '*'
    return matrix


def check_index(row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True
    return False



directions = {
    'up': (-1, 0),
    'down': (1, 0),
    'left': (0, -1),
    'right': (0, 1),
    'up_right': (-1, 1),
    'up_left': (-1, -1),
    'down_right': (1, 1),
    'down_left': (1, -1)
}

n = int(input())
bombs = int(input())
bombs_coordinates = []

for _ in range(bombs):
    bomb = input().replace(')', '').replace('(', '').split(', ')
    bombs_coordinates.append(bomb)

matrix = read_matrix(n, bombs_coordinates)

for row in range(n):
    for col in range(n):
        current_value = matrix[row][col]
        if current_value == '*':
            continue
        counter = 0
        for direction in directions:
            next_row = row + directions[direction][0]
            next_col = col + directions[direction][1]
            if check_index(next_row, next_col):
                if matrix[next_row][next_col] == '*':
                    counter += 1
        matrix[row][col] = counter

for element in matrix:
    element = [str(x) for x in element]
    print(' '.join(element))

