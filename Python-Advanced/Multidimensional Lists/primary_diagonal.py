def read_matrix():
    n = int(input())
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split()]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
total_sum = 0
for row in range(n):
    total_sum += matrix[row][row]

print(total_sum)
