import { PubappPage } from './app.po';

describe('pubapp App', () => {
  let page: PubappPage;

  beforeEach(() => {
    page = new PubappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
