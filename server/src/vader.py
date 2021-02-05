import argparse
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import operator
import sys

sentence = sys.argv[1]

sid = SentimentIntensityAnalyzer()
results = sid.polarity_scores(sentence)

print(results)


    