def read_matrix():
    n = int(input())
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split()]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)

primary_diagonal = []
secondary_diagonal = []

for row_idx in range(n):
    primary_diagonal.append(matrix[row_idx][row_idx])
    secondary_diagonal.append(matrix[row_idx][n - row_idx - 1])

result = abs(sum(primary_diagonal) - sum(secondary_diagonal))
print(result)