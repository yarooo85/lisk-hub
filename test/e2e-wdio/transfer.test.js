import { loginPage, dashboardPage, delegatesPage, sidechainsPage, settingsPage } from './pages/pages';
import { generateRandomAddress, waitForTxConfirmation } from './support/utils';
import accounts from '../constants/accounts';

describe('Transfer', () => {
  it('Sent transaction without second passphrase', () => {
    const randomRecipient = generateRandomAddress();
    const amount = '1';

    loginPage
      .open_NetworkSwitcherEnabled()
      .chooseNetwork('local')
      .login(accounts.genesis.passphrase);
    dashboardPage.transfer
      .setAddress(randomRecipient)
      .setAmount(amount)
      .getConvertedPrice()
      .should.match(/^~ \d{1,100}(\.\d{1,2})?$/, 'Converted price should match regexp');
    dashboardPage.transfer
      .next()
      .send();
    const tx = dashboardPage.activity.getTXByNumber(1);
    tx.address.should.be.equal(randomRecipient);
    // tx.date.should.be.equal(randomRecipient);
    tx.amount.should.be.equal(amount);
  });
});
