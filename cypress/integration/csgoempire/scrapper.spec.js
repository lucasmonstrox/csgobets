describe('auth:login', () => {
  beforeEach(() => cy.visit('https://csgoempire.com'));
  describe('Bets Total', () => {
    const betsTotalRegex = /(?<betsTotal>\d+) Bets Total/;
    it('should scrap Bets Total from black', () => {
      cy.get('.bets-container:first-child').should(($div) => {
        const text = $div.text();
        expect(text).to.match(betsTotalRegex);
      });
    });
    it('should scrap Bets Total from green', () => {
      cy.get('.bets-container:nth-child(2)').should(($div) => {
        const text = $div.text();
        expect(text).to.match(betsTotalRegex);
      });
    });
    it('should scrap Bets Total from red', () => {
      cy.get('.bets-container:last-child').should(($div) => {
        const text = $div.text();
        expect(text).to.match(betsTotalRegex);
      });
    });
  });
});
