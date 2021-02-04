import random

def integer(num):
    try:
        return int(num)
    except:
        print("Integer please!")

def check(guess,num):
    if guess>num:
        print("Too High!")
        return False
    elif guess<num:
        print("Too Low!")
        return False
    else:
        return True

x = input('Hello, What\'s you\'re name: ')
print('Welcome to a guessing game '  + x + '!')

diff = input('On a scale of easy-1 to impossible-4, what level difficulty do you want? ')
diff = integer(diff)
while type(diff)!=int or diff>4:
    diff = input('Press 1 for easy, 2 for medium, 3 for hard, and 4 for impossible: ')
    diff = integer(diff)

lo = random.randint(1,5**diff)
print(lo)
up = random.randint(6**diff,13**diff)
print(up)
number = random.randint(lo,up)

guess = input('What do you think the number is? ')
guess = integer(guess)
ans = check(guess,number)

if number == guess:
    ans = True
else:
    ans = False

keep = 3*diff

while ans == False and keep>0:
    print("Hint: The number is between " + str(lo) + " and " + str(up) + " .")
    guess = input('Try again! You have ' + str(keep) + ' more trie(s).'  + ' What do you think the number is? ')
    guess = integer(guess)
    ans = check(guess,number)

    keep-=1


if ans == True:
    print('That\'s it! You guessed right!')
else:
    print('No!!! It was actually ' + str(number) + '. Better luck next time!' )
