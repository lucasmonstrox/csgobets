import MartinGaleBetStrategy from './martin-gale-bet.strategy';
describe('MartinGaleBetStrategy', () => {
  it('get bet amount', () => {
    const strategy = new MartinGaleBetStrategy(10, 3);
    expect(strategy.getBetAmount()).toBe(80);
  });
});
