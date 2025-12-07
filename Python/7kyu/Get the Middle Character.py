# Description:
# --------------------------------------
# You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

#     If the string's length is odd, return the middle character.
#     If the string's length is even, return the middle 2 characters.

# Examples:

# "test" --> "es"
# "testing" --> "t"
# "middle" --> "dd"
# "A" --> "A"


# Solution:
# --------------------------------------
def get_middle(s):
    if len(s) % 2 == 0:
        slice_start = int(len(s) / 2 - 1)
        slice_end = int(len(s) / 2 + 1)
        return s[slice_start:slice_end]
    else:

        return s[len(s) // 2]
    
print(get_middle("test"), "es")
print(get_middle("A"), "A")
print(get_middle("fiver"), "v")


# Alt Solution:
# --------------------------------------
def get_middle(s):
    index, odd = divmod(len(s), 2)
    if odd:
        return s[index]
    else:
        return s[index - 1: index + 1]

    
print(get_middle("test"), "es")
print(get_middle("A"), "A")
print(get_middle("fiver"), "v")
