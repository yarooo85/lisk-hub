import loginPage from './pages/login.page';
import dashBoardPage from './pages/dashboard.page';
import accounts from '../constants/accounts';
import walletPage from './pages/wallet.page';
import { waitForTxConfirmation } from './support/utils';
import msgs from './support/msgs';

describe('Send', () => {

  beforeEach(() => {
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts.genesis.passphrase);
  });

  it('should allow to send when enough funds and correct address form', () => {
    const regexp = /^~ \d{1,100}(\.\d{1,2})?$/;
    const randomRecipient = '23495548317450503L';

    dashBoardPage.transfer
      .setAddress(randomRecipient)
      .setAmount('1')
      .getConvertedPrice()
      .should.match(new RegExp(regexp), 'Converted price should match regexp');
    dashBoardPage.transfer
      .next()
      .send()
      .getSendTxResultMessage()
      .should.be.equal(msgs.transactionIsBeingProcessed, 'Transaction processing msg should appear');
    dashBoardPage.activity
      .getDisplayedTXsNumber()
      .should.be.equal(5, 'Number of shown transactions on Dashboard');
    waitForTxConfirmation();
    dashBoardPage.activity
      .seeAllTX();
    walletPage.activity
      .getDisplayedTXsNumber()
      .should.be.equal(25, 'Number of shown transactions in Wallet');
    // walletPage.scrollTxList();
    // walletPage.getDisplayedTxsNumber().should.be.equal(25);
  });

  it('should allow to send when enough funds and correct address form', () => {
    const recipient = '4995063339468361088L';
    const amount = '5';

    walletPage
      .launchProtokol(recipient, amount);
    walletPage.transfer
      .getEnteredRecipient()
      .should.be.equal(recipient, 'Recipient name in the field as we open launch protokol link');
    walletPage.transfer
      .getEnteredAmount()
      .should.be.equal(amount, 'Amount in the field as we open launch protokol link');
    dashBoardPage.transfer
      .next()
      .send()
      .getSendTxResultMessage()
      .should.be.equal(msgs.transactionIsBeingProcessed, 'Transaction processing msg should appear');
  });

  it('should be able to init account if needed', () => {
    dashBoardPage.transfer
      .setAddress(accounts['without initialization'].address)
      .setAmount('1')
      .next()
      .send();
    waitForTxConfirmation();
    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts['without initialization'].passphrase);
    dashBoardPage.transfer
      .isInitializeMessageVisible().should.equal(true, 'Initialize account advice message visibility');
    dashBoardPage.transfer
      .initAccountNext()
      .send();
    waitForTxConfirmation();
    dashBoardPage
      .refresh();
    dashBoardPage.transfer
      .isInitializeMessageVisible().should.equal(false, 'Initialize account advice message visibility');
    dashBoardPage.activity
      .getDisplayedTXsNumber().should.equal(2, 'Number of shown transactions in activity');
  });


});
