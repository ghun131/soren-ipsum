import { getTitle } from '../support/app.po';

describe('soren', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title Soren Ipsum', () => {
    getTitle().contains('Soren Ipsum');
  });

  it('should get 5 sentences initial load')

  it('should give different paragraph when click next ')

  it('should give 5 words when word is selected before clicking next')

  it('should generate new paragraph when ctr + g is pressed')

  it('should copy text when ctr + c is pressed')
});
