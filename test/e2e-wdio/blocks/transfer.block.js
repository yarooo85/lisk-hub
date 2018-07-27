class TransferBlock {
  /**
   * Elements
   */
  get _amountInput() { return $('.amount input'); }
  get _convertorElement() { return $('.convertor'); }
  get _convertedPriceIndicator() { return $('.converted-price'); }
  get _convertedCurrencyIndicator() { return $('.converted-currency'); }
  get _recipientInput() { return $('.recipient input'); }
  get _nextButton() { return $('.send-next-button'); }
  get _sendButton() { return $('.send-button'); }
  get _resultBox() { return $('.result-box-message'); }
  get _sendTabButton() { return $('.send-tab'); }
  get _requestTabButton() { return $('.request-tab'); }
  get _initializeBlock() { return  $('.account-initialization'); }
  get _initNextButton() { return  $('.account-init-button'); }

  /**
   * Block Methods
   */
  setAddress(address) {
    this._recipientInput.click();
    this._recipientInput.setValue(address);
    return this;
  }

  setAmount(amount) {
    this._amountInput.click();
    this._amountInput.setValue(amount);
    return this;
  }

  getEnteredRecipient() {
    return this._recipientInput.getValue();
  }

  getEnteredAmount() {
    return this._amountInput.getValue();
  }

  getConvertedPrice() {
    this._convertedPriceIndicator.waitForVisible();
    return this._convertedPriceIndicator.getText();
  }

  next() {
    this._nextButton.click();
    return this;
  }

  send() {
    this._sendButton.click();
    this._resultBox.waitForVisible();
    return this;
  }

  getSendTxResultMessage() {
    return this._resultBox.getText();
  }

  isInitializeMessageVisible() {
    return this._initializeBlock.isExisting();
  }

  initAccountNext() {
    this._initNextButton.click();
    return this;
  }

}

export default new TransferBlock();
16313739661670634666L
45471484165918470000L
