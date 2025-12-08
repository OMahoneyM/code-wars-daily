# Description:
# --------------------------------------
# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true
# "aba" --> false
# "moOse" --> false (ignore letter case)


# Solution:
# --------------------------------------
def is_isogram(string):
    if len(string) == 0:
        return True
    lower_string = string.lower()
    hashmap = {}
    
    for letter in lower_string:
        if letter in hashmap:
            hashmap[letter] += 1
        else:
            hashmap[letter] = 1
    
    for value in hashmap.values():
        if value == 1:
            continue
        else:
            return False
        
    return True
        
print(is_isogram("moOse"), False)


# Alt Solution:
# --------------------------------------
def is_isogram(s):
    return len(s) == len(set(s.lower()))

print(is_isogram("moose"), False)