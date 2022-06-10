function Test_Chrome_Headless()
{
  var id, pw, Var1;
      id = "emp1@lg.com";
      pw = "!password1";
  var server = "localhost";
  var capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080",
    "goog:chromeOptions": {
    "args": "--user-data-dir=\"C:\Users\A74581\AppData\Local\Google\Chrome\User Data\Default\" --headless --disable-gpu"
    }
  };

  var url = "https://v-portal-ui.vportaldev.koreabuild.com/login";
  Browsers.RemoteItem(server, capabilities).Run(url);
  Aliases.browser.BrowserWindow.Maximize();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLgVisitReservationLg.Wait();
  //Clicks the 'linkLoginformchanger' link.
  Aliases.browser.pageLgVisitReservationLg.linkLoginformchanger.Click();
  //Clicks the 'textboxEmailid' control.
  Aliases.browser.pageLgVisitReservationLg.textboxEmailid.Click();
  //Sets the text KeywordTests.Test1.Variables.id in the 'textboxEmailid' text editor.
  Aliases.browser.pageLgVisitReservationLg.textboxEmailid.SetText(id);
  //Enters '[Tab]' in the 'textboxEmailid' object.
  Aliases.browser.pageLgVisitReservationLg.textboxEmailid.Keys("[Tab]");
  //Enters '[Tab]' in the 'checkboxChecksaveid' object.
  Aliases.browser.pageLgVisitReservationLg.checkboxChecksaveid.Keys("[Tab]");
  //Sets the text KeywordTests.Test1.Variables.pw in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLgVisitReservationLg.passwordboxPassword.SetText(pw);
  //Enters '[Enter]' in the 'passwordboxPassword' object.
  Aliases.browser.pageLgVisitReservationLg.passwordboxPassword.Keys("[Enter]");
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageReservation.Wait();

}
