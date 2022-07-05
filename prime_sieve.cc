#include <iostream>
#include <cmath>
#include <chrono>

int main()
{
int nr_ales = 0;
std::cout << "Al catelea numar prim il vrei?\n";
std::cin >> nr_ales;

using namespace std::chrono;
high_resolution_clock::time_point t1 = high_resolution_clock::now();

int limit = 0;
if (nr_ales < 90)
    limit = 500;
else
    limit = nr_ales * 1.2 * log(nr_ales);
    
int limit_sqrt = 1 + std::sqrt(limit);
int* bool_list = new int[limit];
bool_list[0] = bool_list [1] = 1;

for (int i = 2; i <= limit_sqrt; i++)
    if (bool_list[i] == 0)
        for (int item = i*i; item < limit; item += i)
            bool_list[item] = 1;

int k = 0;
int* prime_list = new int[nr_ales];
for (int j = 2; j < limit; j++)
    if (bool_list[j] == 0){
        prime_list[k] = j;
        k++;
    }
std::cout << "Al " << nr_ales << "-lea numar prim e " << prime_list[nr_ales -1] << ".\n";

high_resolution_clock::time_point t2 = high_resolution_clock::now();
duration<double> time_span = duration_cast<duration<double>>(t2-t1);
std::cout << time_span.count() << " seconds." << std::endl;

return 0;
}

