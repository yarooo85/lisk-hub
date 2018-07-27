import walletPage from '../pages/wallet.page';

class HeaderBlock {
  /**
   * Elements
   */
  get _address() { return $('.copy-title'); }
  get _balance() { return $('.balance span'); }

  /**
   * Block Methods
   */
  getAddress() {
    this._address.waitForVisible();
    return this._address.getText();
  }

  getBalance() {
    this._balance.waitForVisible();
    return this._balance.getText().replace(/,/g, '') * 10e7;
  }

}

export default new HeaderBlock();

