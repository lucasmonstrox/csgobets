import SimpleBetStrategy from './simple-bet.strategy';
describe('SimpleBetStrategy', () => {
  it('get bet amount', () => {
    const strategy = new SimpleBetStrategy(10);
    expect(strategy.getBetAmount()).toBe(10);
  });
});
