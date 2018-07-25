import walletPage from '../pages/wallet.page';

class HeaderBlock {
  /**
   * Elements
   */
  get _address() { return $('.copy-title'); }

  /**
   * Block Methods
   */
  getAddress() {
    return this._address.getText();
  }

}

export default new HeaderBlock();

