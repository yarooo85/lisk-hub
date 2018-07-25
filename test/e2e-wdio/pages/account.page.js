import BasePage from './base.page';
import activity from '../blocks/activity.block';
import accountInfo from '../blocks/accountInfo.block';

class AccountPage extends BasePage {

  constructor() {
    super();
    this.accountInfo = accountInfo;
    this.activity = activity;
  }
  /**
   * Elements
   */


  /**
   * Page Methods
   */
  waitForLoad() {
    this.activity._allTab.waitForVisible();
    return this;
  }

  open(address) {
    browser.url(`/#/explorer/accounts/${address}`);
    this.waitForLoad();
    return this;
  }




}

export default new AccountPage();

