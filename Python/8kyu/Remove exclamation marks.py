# Description:
# --------------------------------------
# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


# Solution:
# --------------------------------------
def remove_exclamation_marks(s):
    result = s.replace("!", "")
    return result