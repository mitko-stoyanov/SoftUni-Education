from math import ceil


def read_matrix():
    n, m = [int(x) for x in input().split(', ')]
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split(', ')]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
m = len(matrix[0])
max_sum = 0
max_matrix = []

for row_idx in range(n):
    current_sum = 0
    if row_idx >= ceil(len(matrix) - 1):
        break
    for col_idx in range(m):
        if col_idx > (len(matrix[0]) - 2):
            break
        current_sum = matrix[row_idx][col_idx] + matrix[row_idx][col_idx + 1] + matrix[row_idx + 1][col_idx] + \
                      matrix[row_idx + 1][col_idx + 1]
        if current_sum > max_sum:
            max_sum = current_sum
            max_matrix = [[matrix[row_idx][col_idx], matrix[row_idx][col_idx + 1]],
                          [matrix[row_idx + 1][col_idx], matrix[row_idx + 1][col_idx + 1]]]
for element in max_matrix:
    print(' '.join([str(x) for x in element]))
print(max_sum)
