import walletPage from '../pages/wallet.page';

class ActivityBlock {
  /**
   * Elements
   */
  get _transactionsTable() { return $('.transaction-results'); }
  get _transactionsTableRows() { return $$('.transactions-row'); }
  get _transactionAddress() { return this._transactionsTableRows[this.txNumber].$('.transactionAddress'); }
  get _transactionDate() { return this._transactionsTableRows[this.txNumber].$('.transactionDate span'); }
  get _transactionAmount() { return this._transactionsTableRows[this.txNumber].$('#transactionAmount span'); }
  get _seeAllLink() { return $('.seeAllLink'); }
  get _allTab() { return $('.filter-all'); }

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

  getTXByNumber(number) {
    this.txNumber = number - 1;
    return {
      address: this._transactionAddress.getText(),
      date: this._transactionDate.getText(),
      amount: this._transactionAmount.getText(),
    };
  }


}

export default new ActivityBlock();

