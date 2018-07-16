import accountPage from './accounts.page';

class BasePage {


  /**
   * Elements
   */
  get _accountBlock() { return $('.account'); }
  get _avatarButton() { return this._accountBlock.$('a'); }


  /**
   * Page Methods
   */
  refresh() {
    browser.refresh();
  }



}

export default BasePage;

