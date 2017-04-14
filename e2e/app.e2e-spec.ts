import { CardsAgainstNormallityPage } from './app.po';

describe('cards-against-normallity App', () => {
  let page: CardsAgainstNormallityPage;

  beforeEach(() => {
    page = new CardsAgainstNormallityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
