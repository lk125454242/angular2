import { browser, element, by } from 'protractor';

export class Angular2Page {
  static navigateTo() {
    return browser.get('/');
  }

  static getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
