---
title: Using LINQ to change the value of a result in a WHERE query
status: draft
date: 2020-03-05T12:56:27.163Z
---
```
NAMEOFLIST.Where(x => x.FIELD == ELEMENT/CONTROL.VALUE).ToList().Select(x => { x.FIELDTOCHANGE = NEWVALUE; return x; }).ToList();
```
