# import json
# from urllib.request import urlopen
# url = "https://gdata.youtube.com/feeds/api/standardfeeds/top_rated?alt=json"
# response = urlopen(url)
# contents = response.read()
# text = contents.decode('utf8')
# data = json.loads(text)
# for video in data ['feed']['entry'][0:6]:
#   print(video['title']['$t'])

from prettytable import PrettyTable

table = PrettyTable(["animal", "ferocity"])
table.add_row(["wolverine", 100])
table.add_row(["grizzly", 87])
table.add_row(["Rabbit of Caerbannog", 110])
table.add_row(["cat", -1])
table.add_row(["platypus", 23])
table.add_row(["dolphin", 63])
table.add_row(["albatross", 44])

table.sortby = "ferocity"
table.reversesort = True

print(table)
