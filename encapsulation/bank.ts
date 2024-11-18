//bank.ts
export class bankAccount {
  private accountNumber: string;
  private balance: number;
  //constructor
  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  //deposit
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`amount:  ${amount}, new balance: ${this.balance}`);
    } else console.log(`deposit amount must be positive`);
  }
  //withdraw
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`withdrew: ${amount}, new balance: ${this.balance}`);
    } else console.log(`Insufficient funds`);
  }

  public getBalance(): number {
    return this.balance;
  }
}

