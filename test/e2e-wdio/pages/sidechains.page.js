import BasePage from './base.page';
import header from '../blocks/header.block';
import sidebar from '../blocks/sidebar.block';

class SidechainsPage extends BasePage {

  constructor() {
    super();
    this.header = header;
    this.sidebar = sidebar;
  }
  /**
   * Elements
   */
  get _learnMoreLink() { return $('.learn-more-link'); }


  /**
   * Page Methods
   */
  waitForLoad() {
    this._learnMoreLink.waitForVisible();
    return this;
  }

  open() {
    browser.url('/#/sidechains');
    return this;
  }

}

export default new SidechainsPage();

