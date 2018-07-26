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
    return this._address.getText();
  }

  getBalance() {
    return this._balance.getText().replace(/,/g, '').replace('.','') + '00';
  }

}

export default new HeaderBlock();

