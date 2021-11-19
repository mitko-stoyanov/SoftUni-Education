class sequence_repeat:
    def __init__(self, sequence, number):
        self.sequence = sequence
        self.number = number
        self.idx = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.number == 0:
            raise StopIteration
        ch = self.sequence[self.idx]
        self.number -= 1
        self.idx += 1
        if self.idx >= len(self.sequence):
            self.idx = 0
        return ch