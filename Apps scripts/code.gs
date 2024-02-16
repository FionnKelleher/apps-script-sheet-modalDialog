function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
      .addItem('PMS Planner', 'showDialog')
      .addToUi();
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Hello, World!')
      .setWidth(250)
      .setHeight(150);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'PMS Planner');
}
