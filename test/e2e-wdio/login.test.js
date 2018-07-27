import { step } from 'mocha-steps';
import { loginPage, registerPage, accountPage, dashboardPage} from './pages/pages';
import accounts from '../constants/accounts';

describe('Login Page', () => {

  it('Create lisk id -> Register account', () => {
    loginPage
      .open()
      .createLiskId();
    registerPage
      .waitForLoad();
  });

  // Reenable after 1.0 is released
  xit('“Switch network” is off -> Logging in default network' +
    '@mainnet', () => {
    loginPage
      .open()
      .login(accounts.genesis.passphrase);
    // Test the easiest to check thing
  });

  // Reenable after 1.0 is released
  xit('“Switch network” is on -> Logging in mainnet network' +
    ' @mainnet', () => {
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('main')
      .login(accounts.genesis.passphrase);
    // Test the easiest to check thing
  });

  it('“Switch network” is on -> Logging in testnet network' +
    ' @testnet', () => {
    const address = '10020978176543317477L';
    const name = 'samuray';
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('test')
      .login(accounts.genesis.passphrase);
    accountPage
      .open(address)
      .accountInfo.getDelegateName()
      .should.be.equal(name, `in test network ${address} name should be equal ${name}`);
  });

  it('“Switch network” is on -> Logging in local network', () => {
    const address = '537318935439898807L';
    const name = 'genesis_17';
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts.genesis.passphrase);
    accountPage
      .open(address)
      .accountInfo.getDelegateName()
      .should.be.equal(name, `in local network ${address} name should be equal ${name}`);
  });

  it('Successful login -> Address and Balance are correct', () => {
    // TODO: use account that would be 100% untouched
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts['send all account'].passphrase);
    dashboardPage
      .header.getAddress()
      .should.be.equal(accounts['send all account'].address, 'account address should be correct');
    dashboardPage
      .header.getBalance()
      .should.be.equal(accounts['send all account'].balance, 'account balance should be correct');
  });


});
