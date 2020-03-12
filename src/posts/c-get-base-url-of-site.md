---
title: 'C# get base URL of site'
status: draft
date: 2020-03-12T15:08:08.534Z
---
string baseUrl = Request.Url.Scheme + "://" + Request.Url.Authority + Request.ApplicationPath.TrimEnd('/') + "/";
