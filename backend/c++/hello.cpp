#include <iostream>

int main(int argc, char **argv)
{
	std::cout << "hello from cpp" << std::endl;
	std::cout << "You have entered " << argc
		 << " arguments:"
		 << "\n";

	for (int i = 1; i < argc; ++i)
		std::cout << argv[i] << "\n";

	return 0;
}