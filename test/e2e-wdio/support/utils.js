export function waitForTxConfirmation() {
  browser.pause(10000);
}

export function generateRandomAddress() {
  return `183${Math.random() * 10e16}L`;
}

export function getFormattedDate() {
  const date = new Date();
  const locale = 'en-us';
  const month = date.toLocaleString(locale, { month: 'short' });
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${month} ${dd} ,${yyyy}`;
}
