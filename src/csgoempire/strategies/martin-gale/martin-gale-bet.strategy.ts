class MartinGaleBetStrategy {
  constructor(private amount: number, private lossStreak: number) {}
  getBetAmount(): number {
    // multiply by 2^n, where n is the number of losses. https://en.wikipedia.org/wiki/Martingale_(probability_theory)
    const amountMultiplier = Math.pow(2, this.lossStreak);
    const amountToBet = this.amount * amountMultiplier;
    const roundedAmountToBet = Math.round(amountToBet * 100) / 100;
    return roundedAmountToBet;
  }
}
export default MartinGaleBetStrategy;
