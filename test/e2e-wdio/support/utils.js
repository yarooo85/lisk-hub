export function waitForTxConfirmation() {
  browser.pause(10000);
}

export function generateRandomAddress() {
  return `183${Math.random() * 10e16}L`;
}
