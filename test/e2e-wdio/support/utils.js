export function waitForTxConfirmation() {
  browser.pause(10000);
}

export function generateRandomAddress() {
  return `18${Math.random() * 10e17}L`;
}
