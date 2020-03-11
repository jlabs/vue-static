---
title: Writting to RESX resource files in ASP.NET
status: draft
date: 2020-03-11T11:33:28.268Z
---
https://docs.microsoft.com/en-us/dotnet/api/system.resources.resxresourcewriter?view=netframework-4.8

Requires a reference (Solution > References > Add Reference) to System.Windows.Forms to use the ResXResourceWritter/Reader class.

I used a dictionary of <string, string> to save the key/values back to the resources file.

Need to use HttpContext.Current.Server.MapPath("~/App_GlobalResources/Resources.resx") for the source file if not using a codebehind derived from a html/aspx page.
