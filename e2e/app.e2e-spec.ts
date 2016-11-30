import { TabControlPage } from './app.po';

describe('tab-control App', function() {
  let page: TabControlPage;

  beforeEach(() => {
    page = new TabControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
