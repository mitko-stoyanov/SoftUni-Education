class dictionary_iter:
    def __init__(self, dictionary):
        self.dictionary = dictionary
        self.keys = list(self.dictionary.keys())
        self.keys_idx = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.keys_idx >= len(self.keys):
            raise StopIteration
        key = self.keys[self.keys_idx]
        self.keys_idx += 1
        value = self.dictionary[key]
        return key, value