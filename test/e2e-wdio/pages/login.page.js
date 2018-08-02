import registerPage from './register.page';
import dashboardPage from './dashboard.page';

class LoginPage {
  /**
   * Elements
   */
  get _passphraseInput() {
    return $('.passphrase input');
  }

  get _loginButton() {
    return $('.login-button');
  }

  get _createLiskIdButton() {
    return $('.new-account-button');
  }

  get _networkSelect() {
    return $('.network');
  }

  get _networkSelectList() {
    return this._networkSelect.$$('ul li');
  }

  get _nodeAddressInput() {
    return $('.address input');
  }

  /**
   * Page Methods
   */
  waitForLoad() {
    this._passphraseInput.waitForVisible();
    return this;
  }

  open() {
    browser.url('/');
    return this;
  }


  open_NetworkSwitcherEnabled() {
    browser.url('#/?showNetwork=true');
    this.waitForLoad();
    return this;
  }

  login(passphrase) {
    this._passphraseInput.click();
    this._passphraseInput.setValue(passphrase);
    this._loginButton.click();
    dashboardPage.waitForLoad();
  }

  chooseNetwork(networkNickname) {
    this._networkSelect.click();
    this._networkSelectList[0].waitForVisible();
    switch (networkNickname) {
      case 'main':
        this._networkSelectList[0].click();
        break;
      case 'test':
        this._networkSelectList[1].click();
        break;
      case 'local':
        this._networkSelectList[2].click();
        this._nodeAddressInput.click();
        this._nodeAddressInput.setValue(browser.props.coreUrl);
        break;
      default:
        throw new Error('netWorkNickname should be set to one of: main / net / local');
    }
    return this;
  }

  createLiskId() {
    this._createLiskIdButton.click();
    return registerPage.waitForLoad();
  }
}

export default new LoginPage();

