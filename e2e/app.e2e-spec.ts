import { AngularCalendarPocPage } from './app.po';

describe('angular-calendar-poc App', () => {
  let page: AngularCalendarPocPage;

  beforeEach(() => {
    page = new AngularCalendarPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
