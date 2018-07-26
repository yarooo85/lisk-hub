import walletPage from './wallet.page';
import BasePage from './base.page';
import transfer from '../blocks/transfer.block';
import activity from '../blocks/activity.block';
import header from '../blocks/header.block';
import sidebar from '../blocks/sidebar.block';

class DelegatesPage extends BasePage {

  constructor() {
    super();
    this.header = header;
    this.sidebar = sidebar;
  }
  /**
   * Elements
   */
  get _delegateRow() { return $('.delegate-row'); }
  get _cleanSearchButton() { return $('.clean-icon'); }
  get _searchField() { return $('.search'); }
  get _emptyMessage() { return $('.empty-message'); }
  get _nextButton() { return $('.next'); }
  get _confirmButton() { return $('.confirm'); }


  /**
   * Page Methods
   */
  waitForLoad() {
    this._delegateRow.waitForExist();
    return this;
  }

  open() {
    browser.url('/#/delegates');
    return this;
  }

}

export default new DelegatesPage();

