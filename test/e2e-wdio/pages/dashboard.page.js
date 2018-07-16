import walletPage from './wallet.page';
import BasePage from './base.page';
import transfer from '../blocks/transfer.block';
import activity from '../blocks/activity.block';

class DashboardPage extends BasePage {

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
    this.activity._transactionsTable.waitForVisible();
    return this;
  }

  open() {
    browser.url('/dashboard');
    return this;
  }

}

export default new DashboardPage();

