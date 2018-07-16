import BasePage from './base.page';
import transfer from '../blocks/transfer.block';
import activity from '../blocks/activity.block';

class WalletPage extends BasePage {

  constructor() {
    super();
    this.transfer = transfer;
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

  open() {
    browser.url('/#/wallet');
    return this;
  }

  launchProtokol(recipient, amount) {
    browser.url(`/#/wallet?recipient=${recipient}&amount=${amount}`);
    return this;
  }

}

export default new WalletPage();

