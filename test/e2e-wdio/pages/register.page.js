class RegisterPage {
  /**
   * Elements
   */
  get _backButton() { return $('.multistep-button'); }

  /**
   * Page Methods
   */
  waitForLoad() {
    this._loginButton.waitForVisible();
    return this;
  }

  open() {
    browser.url('/#/register');
    return this;
  }

}

export default new RegisterPage();

