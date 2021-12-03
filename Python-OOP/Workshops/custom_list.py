from numbers import Number


class CustomList:
    def __init__(self):
        self.__elements = []

    def append(self, value):
        self.__elements.append(value)
        return self.__elements

    def remove(self, index):
        if self.__is_invalid_index(index):
            raise IndexError(f'{index} is invalid index')
        self.__elements.pop(index)

    def __is_invalid_index(self, index):
        return index < 0 or index >= len(self.__elements)

    def get(self, index):
        if not isinstance(index, int):
            raise ValueError(f'{index} is not an integer.')
        if self.__is_invalid_index(index):
            raise IndexError(f'{index} is invalid index')
        return self.__elements[index]

    def extend(self, iterable):
        new_list = list(self.__elements)
        try:
            iter(iterable)
            for el in iterable:
                new_list.append(el)
        except TypeError:
            new_list.append(iterable)
        return new_list

    def insert(self, index, value):
        if index < 0 or index > len(self.__elements):
            raise IndexError('Invalid index!')
        self.__elements.insert(index, value)
        return self.__elements

    def pop(self):
        if len(self.__elements) == 0:
            raise IndexError('Custom list is empty')
        return self.__elements.pop()

    def clear(self):
        self.__elements = []

    def index(self, value):
        for index in range(len(self.__elements)):
            if self.__elements[index] == value:
                return index
        return -1

    def count(self, value):
        result = 0
        for element in self.__elements:
            if element == value:
                result += 1
        return result

    def reverse(self):
        return self.__elements[::-1]

    def copy(self):
        return list(self.__elements)

    def size(self):
        return len(self.__elements)

    def add_first(self, value):
        self.insert(0, value)

    def dictionize(self):
        result = {}
        last_even_key = None

        for i in range(len(self.__elements)):
            element = self.__elements[i]
            if i % 2 == 0:
                result[element] = ' '
                last_even_key = element
            else:
                result[last_even_key] = element
        return result

    def move(self, amount):
        partition = self.__elements[0:amount]
        self.__elements.extend(partition)
        return self.__elements[amount:]

    def sum(self):
        result = 0
        for element in self.__elements:
            if isinstance(element, int):
                result += element
            else:
                result += len(element)
        return result


