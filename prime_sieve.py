import math
import time

nr_ales = int(input("Al catelea numar prim il vrei?\n"))

start_time = time.time()
if nr_ales < 90:
    limit = 500
else:
    limit = nr_ales * 1.2 * math.log(nr_ales)

limit = int(limit)
limit_sqrt = 1 + int(math.sqrt(limit))
bool_list = [True] * limit
bool_list[0] = bool_list[1] = False

for i in range(2, limit_sqrt):
    if bool_list[i] == True:
        for item in range(i*i, limit, i):
            bool_list[item] = False

prime_list = []
for index, value in enumerate(bool_list):
    if value == True:
        prime_list.append(index)

print("Al " + str(nr_ales) + "-lea numar prim e " + str(prime_list[nr_ales -1]) + ".")
print("--- %s seconds ---" % (time.time() - start_time))
