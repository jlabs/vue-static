---
title: ASP Dropdownlist losing attributes during postback
status: draft
date: 2020-03-05T11:19:20.011Z
---
Add the attribute manually e.g. 

```
<asp:DropDownList 
```

```
runat="server" 
```

```
ID="ddlPosters" 
```

```
AutoPostBack="true" 
```

```
data-placementGUID='<%# Eval("placement_GUID") %>'OnSelectedIndexChanged="ddlPosters_SelectedIndexChanged"></asp:DropDownList>
```
