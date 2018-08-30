SystemUtil.CloseProcessByName "iexplore.exe"
 	'to open browser
 	SystemUtil.Run "chrome.exe", "www.google.com",,,3
	Browser("title:=.*").Page("title:=.*").Sync()
	
