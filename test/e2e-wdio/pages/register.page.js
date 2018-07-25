class RegisterPage {
  /**
   * Elements
   */
  get _backButton() { return $('.multistep-back'); }

  /**
   * Page Methods
   */
  waitForLoad() {
    this._backButton.waitForVisible();
    return this;
  }

  open() {
    browser.url('/#/register');
    return this;
  }

}

export default new RegisterPage();

