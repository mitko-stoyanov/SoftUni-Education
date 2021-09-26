def read_matrix():
    n, m = [int(x) for x in input().split()]
    matrix = []
    for _ in range(n):
        row = [x for x in input().split()]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
m = len(matrix[0])
counter = 0

for row_idx in range(n - 1):
    for col_idx in range(m - 1):
        first_chr = matrix[row_idx][col_idx]
        second_chr = matrix[row_idx][col_idx + 1]
        third_char = matrix[row_idx + 1][col_idx]
        fourth_char = matrix[row_idx + 1][col_idx + 1]
        if first_chr == second_chr == third_char == fourth_char:
            counter += 1

print(counter)