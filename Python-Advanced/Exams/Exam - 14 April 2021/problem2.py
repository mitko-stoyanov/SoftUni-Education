def read_matrix():
    n = 7
    matrix = []
    for _ in range(n):
        row = input().split()
        matrix.append(row)
    return matrix


def check_idx(row_index, col_index):
    if 0 <= row_index <= 6 and 0 <= col_index <= 6:
        return True
    else:
        return False


def find_sum(row_index, col_index, operation):
    points = 0
    if operation in 'DTB':
        if operation == 'D':
            points = 2 * (int(matrix[row_index][0]) + int(matrix[0][col_index]) + int(matrix[row_index][6])
                          + int(matrix[6][col_index]))
        elif operation == 'T':
            points = 3 * (int(matrix[row_index][0]) + int(matrix[0][col_index]) + int(matrix[row_index][6])
                          + int(matrix[6][col_index]))
        elif operation == 'B':
            points = 501
    else:
        points = int(operation)
    return points


first_player, second_player = input().split(', ')
matrix = read_matrix()

data = {
    first_player: 501,
    second_player: 501
}

current_player = 0

first_player_throws = 0
second_player_throws = 0

while data[first_player] > 0 and data[second_player] > 0:
    row_idx, col_idx = [int(x) for x in input().replace('(', '').replace(')', '').split(', ')]

    if check_idx(row_idx, col_idx):
        current_operation = matrix[row_idx][col_idx]
        current_sum = find_sum(row_idx, col_idx, current_operation)
        if current_player % 2 == 0:
            data[first_player] -= current_sum
            first_player_throws += 1
        else:
            data[second_player] -= current_sum
            second_player_throws += 1
    else:
        if current_player % 2 == 0:
            first_player_throws += 1
        else:
            second_player_throws += 1
    current_player += 1

for key, value in data.items():
    if value <= 0:
        if key == first_player:
            print(f'{key} won the game with {first_player_throws} throws!')
        else:
            print(f'{key} won the game with {second_player_throws} throws!')
        break
