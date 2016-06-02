#!usr/bin/env python

# Thom Mekelenkamp

import csv
import json

# define data file and output file
csvfile = open('emission.csv', 'r')
jsonfile = open('emission.json', 'w')

# define field names for jason file
fieldnames = ("country","capital","tens","zeros","nineties","eighties")
reader = csv.DictReader( csvfile, fieldnames)
# read through file and split in separate lines + a ","
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
