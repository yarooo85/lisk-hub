import { walletPage, dashboardPage, delegatesPage, sidechainsPage, settingsPage } from '../pages/pages';

class SidebarBlock {
  /**
   * Elements
   */
  get _homeButton() { return $('.home-link'); }
  get _dashboardButton() { return $('#dashboard'); }
  get _walletButton() { return $('#transactions'); }
  get _delegatesButton() { return $('#delegates'); }
  get _sidechainsButton() { return $('#sidechains'); }
  get _settingsButton() { return $('#settings'); }

  /**
   * Block Methods
   */
  goHome() {
    this._homeButton.click();
    dashboardPage.waitForLoad();
  }

  goDashboard() {
    this._dashboardButton.click();
    dashboardPage.waitForLoad();
  }

  goWallet() {
    this._walletButton.click();
    walletPage.waitForLoad();
  }

  goDelegates() {
    this._delegatesButton.click();
    delegatesPage.waitForLoad();
  }

  goSidechains() {
    this._sidechainsButton.click();
    sidechainsPage.waitForLoad();
  }

  goSettings() {
    this._settingsButton.click();
    settingsPage.waitForLoad();
  }

}

export default new SidebarBlock();

