BotClean
==================

The goal of Artificial Intelligence is to create 
a rational agent (Artificial Intelligence 1.1.4).

An agent gets input from the environment through 
sensors and acts on the environment with actuators.

In this challenge, you will program a simple bot to 
perform the correct actions based on environmental input.

Meet the bot MarkZoid.

It’s a cleaning bot whose sensor is a head mounted camera 
and whose actuators are the wheels beneath it.
It’s used to clean the floor.

The bot here is positioned at the top left corner of a 5 by 5 grid.
Your task is to move the bot to clean all the dirty cells.

## Input Format

- The first line contains two single spaced integers
  which indicates the current position of the bot.

- 5 Lines follow representing the grid.
  - The top left of the grid is (0, 0)
  - The bottom right of the grid (4, 4)

- Grid cells:
  - 'b' indicates the bot's current position
    If the bot is on a dirt cell, the cell will still have a 'd' on it.
  - 'd' indicates a dirty cell
  - '-' indicates a clear cell

## Output Format

The output is the action that is taken by the bot in the current step 
and it can be any of the movements in 4 directions or cleaning the cell 
in which it is currently located.

The valid output strings are:
- LEFT
- RIGHT 
- UP 
- DOWN 
- CLEAN

If the bot ever reaches a dirty cell, output CLEAN to clean the dirty cell.
Repeat this process until all the cells on the grid are cleaned.

## Sample Input

    0 0
    b---d
    -d--d
    --dd-
    --d--
    ----d
    
## Sample Output

    RIGHT

## Resultant State

    -b--d
    -d--d
    --dd-
    --d--
    ----d

## Task

Complete the function 'next-move' that takes in 3 parameters:
- posX and posY being the co-ordinates of the bot’s current position
- The board which indicates the board state to print the bot’s next move.

The codechecker will keep calling the function 'next-move' 
till the game is over or you make an invalid move

## Scoring

Your score is (200 - number of moves the bot makes)/40.
CLEAN is considered a move as well.

Once you submit, your bot will be played on four grids 
with three of the grid configurations unknown to you.

 The final score will be the sum of the scores obtained in each of the four grids.
