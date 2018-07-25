class AccountInfoBlock {
  /**
   * Elements
   */
  get _delegateName() { return $('.delegate-name'); }

  /**
   * Block Methods
   */
  getDelegateName() {
    this._delegateName.waitForExist();
    return this._delegateName.getText();
  }

}

export default new AccountInfoBlock();

