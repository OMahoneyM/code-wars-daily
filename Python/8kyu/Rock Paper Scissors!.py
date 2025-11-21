# Description:
# --------------------------------------
# Rules of the "Rock, Paper, Scissors" game are:

#     Rock beats Scissors,
#     Scissors beat Paper,
#     Paper beats Rock,
#     Two identical moves are a draw.

# Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.
# Examples:

# "scissors",     "paper"     --> "Player 1 won!"
# "scissors",     "rock"      --> "Player 2 won!"
# "paper",        "paper"     --> "Draw!"


# Solution:
# --------------------------------------
def rps(p1, p2):
    if (p1 == p2):
        return 'Draw!'
    elif ((p1 == 'rock' and p2 == 'scissors') or (p1 == 'paper' and p2 == 'rock') or (p1 == 'scissors' and p2 == 'paper')):
        return 'Player 1 won!'
    else:
        return 'Player 2 won!'
    

# Alt Solution:
# --------------------------------------
def rps(p1, p2):
    beats = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}
    
    if (beats[p1] == p2):
        return 'Player 1 won!'
    elif (beats[p2] == p1):
        return 'Player 2 won!'
    else:
        return 'Draw!'