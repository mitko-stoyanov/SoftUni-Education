n = int(input())
data = {}

for _ in range(n):
    student_name, grade = input().split()
    if student_name not in data:
        data[student_name] = [float(grade)]
    else:
        data[student_name].append(float(grade))

for student, grade in data.items():
    average_grade = sum(grade) / len(grade)
    grade = [str(f'{x:.2f}') for x in grade]
    print(f'{student} -> {" ".join(grade)} (avg: {average_grade:.2f})')