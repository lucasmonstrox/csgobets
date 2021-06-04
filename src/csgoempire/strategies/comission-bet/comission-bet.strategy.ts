class ComissionBetStrategy {
  constructor(private balance: number, private comission: number) {}
  getBetAmount(): number {
    const amountToBet = this.balance * this.comission;
    return amountToBet;
  }
}
export default ComissionBetStrategy;
