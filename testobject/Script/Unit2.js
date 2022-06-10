function Sample_Run_Browser()
{
  Browsers.Item("chrome").RunOptions = "--user-data-dir=\"C:\Users\A74581\AppData\Local\Google\Chrome\User Data\Default\" --headless";
  
  Browsers.Item(btChrome).Run("https://v-portal-ui.vportaldev.koreabuild.com/login");
  // …
}