---
title: Change PowerApps owner
status: draft
date: 2019-11-27T15:44:15.460Z
---
Source = https://medium.com/@ipradeep/how-to-change-powerapps-owner-using-powershell-4a2e96baa22d



Install-Module -Name Microsoft.PowerApps.Administration.PowerShell

Install-Module -Name Microsoft.PowerApps.PowerShell -AllowClobber

Add-PowerAppsAccount

	If this fails, try: Import-Module Microsoft.PowerApps.Administration.PowerShell

	If that fails, try: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

	Then try the import again, then try add-powerappsaccount again.



Get AppID from the "Details" panel of the app.

Can lookup user-id from Graph search: https://graph.microsoft.com/v1.0/users/<email-address>

Get EnvironmentName from the URL when looking at the list of all apps (it'll be something like Default-123342435-345345-34534545)

Set-AdminPowerAppOwner —AppName ‘app-id’ —AppOwner 'user-id' —EnvironmentName ‘environment-id’



envio id = Default-3f357909-151e-47c8-b55c-56a2bab62a1d

app id = cc81d7f2-255d-4a94-9b35-c54533826b92





Set-AdminPowerAppOwner —AppName ‘cc81d7f2-255d-4a94-9b35-c54533826b92’ —AppOwner 'b0bb2c3c-ad88-4518-9b45-f170df455388' —EnvironmentName ‘Default-3f357909-151e-47c8-b55c-56a2bab62a1d’
