def read_matrix():
    n, m = [int(x) for x in input().split(', ')]
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split()]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
m = len(matrix[0])

for col in range(m):
    current_sum = 0
    for row in range(n):
        current_sum += matrix[row][col]
    print(current_sum)