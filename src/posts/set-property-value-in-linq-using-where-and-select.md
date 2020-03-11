---
title: Set property value in LINQ using WHERE and SELECT
status: draft
date: 2020-03-11T14:27:53.141Z
---
https://visualstudiomagazine.com/articles/2019/07/01/updating-linq.aspx

customers.Where(c => c.IsValid).Select(c => { c.CreditLimit = 1000; return c; }).ToList();
