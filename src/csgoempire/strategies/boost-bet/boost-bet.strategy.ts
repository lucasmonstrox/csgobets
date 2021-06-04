class BoostBetStrategy {
  constructor(private amount: number, private boostPercent: number) {}
  getBetAmount(): number {
    const boostedAmount = this.amount * this.boostPercent;
    return boostedAmount;
  }
}
export default BoostBetStrategy;
