import { loginPage, dashboardPage, delegatesPage, sidechainsPage, settingsPage } from './pages/pages';
import { generateRandomAddress, waitForTxConfirmation, getFormattedDate } from './support/utils';
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
    dashboardPage.activity.isTXPendingByNumber(1).should.equal(true, 'TX should be pending right after sending');
    tx.address.should.be.equal(randomRecipient);
    // tx.date.should.be.equal(getFormattedDate());
    tx.amount.should.be.equal(amount);
  });
});
