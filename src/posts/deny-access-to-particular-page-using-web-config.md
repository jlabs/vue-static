---
title: Deny access to particular page using web.config
status: draft
date: 2020-04-21T07:40:42.524Z
---
`<configuration>`

`	<location path="posterprofile.aspx">`

`		<system.web>`

`			<authorization>`

`				<allow roles="mod"/>`

`				<allow roles="superuser"/>`

`				<allow roles="superadmin"/>`

`				<allow roles="poster"/>`

`				<deny users="*"/>`

`			</authorization>`

`		</system.web>`

`	</location>`

`		`

`		<system.web>`

`			<authorization>`

`				<allow roles="user" />`

`				<deny users="*" />`

`			</authorization>`

`		</system.web>`

`</configuration>`

In the folder root web.config file, use the location tag to specifiy the file you want to change the access to. Then, without a location tag, set the general properties of that folder access
