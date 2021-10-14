from math import floor


def read_matrix(size):
    matrix = []
    for _ in range(size):
        row = [x for x in input().split()]
        matrix.append(row)
    return matrix


def find_player():
    player_row = 0
    player_col = 0
    for row_idx in range(len(matrix)):
        for col_idx in range(len(matrix)):
            if matrix[row_idx][col_idx] == 'P':
                player_row = row_idx
                player_col = col_idx
    return player_row, player_col


def next_stop(command, row, col):
    if command == 'right':
        col += 1
    elif command == 'up':
        row -= 1
    elif command == 'left':
        col -= 1
    elif command == 'down':
        row += 1
    return row, col


def check_index(row, col):
    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return True
    return False


is_crashed = False
coins = 0
all_paths = []


n = int(input())
matrix = read_matrix(n)
start_row, start_col = find_player()

while True:
    command = input()
    next_row, next_col = next_stop(command, start_row, start_col)
    if check_index(next_row, next_col) and not matrix[next_row][next_col] == 'X':
        coins += int(matrix[next_row][next_col])
        if coins >= 100:
            print(f"You won! You've collected {coins} coins.")
            all_paths.append([next_row, next_col])
            break
    else:
        coins *= 0.5
        print(f"Game over! You've collected {floor(coins)} coins.")
        break
    start_row, start_col = next_row, next_col
    all_paths.append([start_row, start_col])

print('Your path:')
for element in all_paths:
    print(element)
