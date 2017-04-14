import { CardsAagainstNormallityPage } from './app.po';

describe('cards-aagainst-normallity App', () => {
  let page: CardsAagainstNormallityPage;

  beforeEach(() => {
    page = new CardsAagainstNormallityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
