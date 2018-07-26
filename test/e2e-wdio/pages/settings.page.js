import BasePage from './base.page';
import header from '../blocks/header.block';
import sidebar from '../blocks/sidebar.block';

class SettingsPage extends BasePage {

  constructor() {
    super();
    this.header = header;
    this.sidebar = sidebar;
  }
  /**
   * Elements
   */
  get _onboardingStartLink() { return $('.onboarding-setting'); }
  get _delegateToggle() { return $('.advancedMode'); }


  /**
   * Page Methods
   */
  waitForLoad() {
    this._onboardingStartLink.waitForVisible();
    return this;
  }

  open() {
    browser.url('/#/setting');
    return this;
  }

  delegateFeaturesToggle() {
    this._delegateToggle.click();
    return this;
  }

}

export default new SettingsPage();

