import { loginPage, walletPage, dashboardPage, delegatesPage, sidechainsPage, settingsPage } from './pages/pages';
import accounts from '../constants/accounts';

describe('Sidebar', () => {

  before(() => {
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts.genesis.passphrase);
  });

  beforeEach(() => {
    dashboardPage.open();
  });

  it('Dashboard menu item lead to corresponding page', () => {
    walletPage.open();
    dashboardPage.sidebar.goDashboard();
    dashboardPage.waitForLoad();
  });

  it('Wallet menu item lead to corresponding page', () => {
    dashboardPage.sidebar.goWallet();
    walletPage.waitForLoad();
  });

  it('Delegates menu item lead to corresponding page', () => {
    settingsPage
      .open()
      .delegateFeaturesToggle()
      .sidebar.goDelegates();
    delegatesPage.waitForLoad();
  });

  it('Sidechains menu item lead to corresponding page', () => {
    dashboardPage.sidebar.goSidechains();
    sidechainsPage.waitForLoad();
  });

  it('Settings menu item lead to corresponding page', () => {
    dashboardPage.sidebar.goSettings();
    settingsPage.waitForLoad();
  });

});
