import random
def coin_tosses():
    heads = 0
    tails = 0
    for i in range(1, 5001, 1):
        flip = round(random.random())
        if flip == 1:
            heads += 1
            flip = "head"
        else:
            tails += 1
            flip = "tail"
        print "Attempt #" + str(i) + ": Throwing a coin... It's a " + flip + "! ... Got " + str(heads) + "head(s) so far and " + str(tails) + " tail(s) so far"
coin_tosses()
