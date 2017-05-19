import { VmsbootstrapPage } from './app.po';

describe('vmsbootstrap App', () => {
  let page: VmsbootstrapPage;

  beforeEach(() => {
    page = new VmsbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
