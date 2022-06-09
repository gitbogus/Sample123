function Test4()
{
  //Aliases.browser.pageSinglexProcurement.headerXmlview1PageHeader.buttonXmlview1Pagesearchbutton.ClickButton();
  //Performs a single click on the specified button.
  var PropNames, PropValues, LastResult;
  PropNames = new Array("id");
  PropValues = new Array("*");
  LastResult = Aliases.browser.pageSinglexProcurement.headerXmlview1PageHeader.buttonXmlview1Pagesearchbutton.Find(PropNames, PropValues, 1000, true).ClickButton();
  //Returns the number of milliseconds passed after starting or resetting the specified performance counter.

}