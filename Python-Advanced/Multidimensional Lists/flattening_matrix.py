def read_matrix():
    n = int(input())
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split(', ')]
        matrix.append(row)
    return matrix


matrix = read_matrix()
flattened_matrix = []
for row in matrix:
    flattened_matrix.extend(row)

print(flattened_matrix)
