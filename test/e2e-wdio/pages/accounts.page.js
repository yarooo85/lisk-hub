import accountsPage from './accounts.page';
import loginPage from './login.page';

class AccountsPage {
  /**
   * Elements
   */
  get _addLiskIdButton() { return $('.add-lisk-id-card'); }

  /**
   * Page Methods
   */
  waitForLoad() {
    this._addLiskIdButton.waitForVisible();
    return this;
  }

  open() {
    browser.url('/#/accounts');
    return this;
  }

  addLiskId() {
    this._addLiskIdButton.click();
    accountsPage.addLiskId();
    loginPage.waitForLoad();
  }


}

export default new AccountsPage();

