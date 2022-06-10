//USEUNIT Unit2
//USEUNIT Unit3
function Test1()
{
  var id, pw, Var1;
  id = "emp1@lg.com";
  pw = "!password1";
  Var1 = "이*국/(주)LG";
  //Runs a script routine.
  Test_Chrome_Headless();
  //Specifies the browser's command-line arguments.
  Browsers.Item("chrome").RunOptions = "--user-data-dir=\"C:\Users\A74581\AppData\Local\Google\Chrome\User Data\Default\" --headless";
  //Runs a script routine.
  //Sample_Run_Browser();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://v-portal-ui.vportaldev.koreabuild.com/login");
  //Maximizes the specified Window object.
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
  //Clicks the 'button' button.
  Aliases.browser.pageReservation.button.ClickButton();
  //Clicks the 'textnodeSettingicon' control.
  Aliases.browser.pageReservation.navSettings.textnodeSettingicon.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLgVisitReservationLg2.Wait();
  //Clicks the 'button' button.
  Aliases.browser.pageLgVisitReservationLg2.button.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLgVisitReservationLg3.Wait();
  //Clicks the 'buttonPagedropdown' button.
  Aliases.browser.pageLgVisitReservationLg3.buttonPagedropdown.ClickButton();
  //Clicks the 'link100' link.
  Aliases.browser.pageLgVisitReservationLg3.buttonPagedropdown.textnode10.link100.Click();
  //Simulates a mouse wheel rotation. Delta indicates the distance the wheel is rotated (a positive value indicates that the wheel was rotated forward, away from the user; a negative value indicates that the wheel was rotated backward, toward the user).
  Aliases.browser.pageLgVisitReservationLg3.tableNo.MouseWheel(-3, skNoShift);
  //Clicks the 'buttonDropdownToggleSubstituteye' button.
  Aliases.browser.pageLgVisitReservationLg3.buttonDropdownToggleSubstituteye.ClickButton();
  //Clicks the 'linkApplyTypeSub' link.
  Aliases.browser.pageLgVisitReservationLg3.buttonDropdownToggleSubstituteye.linkApplyTypeSub.Click();
  //Clicks the 'buttonSearchreservationstatusbut' button.
  Aliases.browser.pageLgVisitReservationLg3.buttonSearchreservationstatusbut.ClickButton();
  //Simulates a mouse wheel rotation. Delta indicates the distance the wheel is rotated (a positive value indicates that the wheel was rotated forward, away from the user; a negative value indicates that the wheel was rotated backward, toward the user).
  Aliases.browser.pageLgVisitReservationLg3.tableNo.MouseWheel(-3);
  if(Aliases.browser.pageLgVisitReservationLg3.textnode4.Exists)
  {
    //Checks whether the 'contentText' property of the Aliases.browser.pageLgVisitReservationLg3.textnode4 object equals '본인신청'.
    aqObject.CheckProperty(Aliases.browser.pageLgVisitReservationLg3.textnode4, "contentText", cmpEqual, "본인신청", false);
    //Posts an information message to the test log.
    Log.Message("대리신청이 아닙니다.", "");
  };
}