information = input()
courses = {}

while ':' in information:
    student_name, id, course_name = information.split(':')
    if course_name not in courses:
        courses[course_name] = {}
    courses[course_name][id] = student_name
    information = input()

searched_course = ' '.join(information.split('_'))

for course_name in courses:
    if course_name == searched_course:
        for id,name in courses[course_name].items():
            print(f'{name} - {id}')