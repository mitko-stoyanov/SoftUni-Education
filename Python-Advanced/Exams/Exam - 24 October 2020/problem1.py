from collections import deque

jobs = deque([int(x) for x in input().split(', ')])
index = int(input())
total_cycles = 0
wanted_num = jobs[index]

sorted_jobs = deque(sorted(jobs))
is_found = False
while sorted_jobs and not is_found:
    if wanted_num not in jobs:
        break
    num_to_search = sorted_jobs.popleft()
    if num_to_search in jobs:
        total_cycles += num_to_search
        jobs.remove(num_to_search)
    else:
        is_found = True
        break

print(total_cycles)