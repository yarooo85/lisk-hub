import walletPage from '../pages/wallet.page';

class ActivityBlock {
  /**
   * Elements
   */
  get _transactionsTable() { return $('.transaction-results'); }
  get _transactionsTableRows() { return $$('.transactions-row'); }
  get _seeAllLink() { return  $('.seeAllLink'); }
  get _allTab() { return  $('.filter-all'); }

  /**
   * Block Methods
   */
  getDisplayedTXsNumber() {
    return this._transactionsTableRows.length;
  }

  seeAllTX() {
    this._seeAllLink.click();
    walletPage.waitForLoad();
  }

  // not working
  scrollTXList() {
    this._transactionsTableRows.slice(-1)[0].scroll(0, 500);
    return this;
  }

}

export default new ActivityBlock();

