#!/usr/bin/python

from random import seed
from random import random

def randomNum(min, max):
        r = int((max-min)*random()+min)
        print(r)

randomNum(1000000000000, 9999999999999)
