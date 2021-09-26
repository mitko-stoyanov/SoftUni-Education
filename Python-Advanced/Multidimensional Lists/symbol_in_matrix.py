def read_matrix():
    n = int(input())
    matrix = []
    for _ in range(n):
        row = input()
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
symbol = input()

is_found = False
for row_idx in range(n):
    if is_found:
        break
    for col_idx in range(n):
        if matrix[row_idx][col_idx] == symbol:
            print(f'({row_idx}, {col_idx})')
            is_found = True
            break

if not is_found:
    print(f'{symbol} does not occur in the matrix')

