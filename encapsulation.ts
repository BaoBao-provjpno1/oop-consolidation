class bankAccount{
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount:number): void {
        if(amount >0){
            this.balance += amount;
            console.log(`amount:  ${amount}, new balance: ${this.balance}`);
        }
        else console.log(`deposit amount must be positive`)
    }

    public withdraw(amount:number): void {
        if(amount >0 && amount <=this.balance){
            this.balance -= amount;
            console.log(`withdrew: ${amount}, new balance: ${this.balance}`);
        }
        else console.log(`Insufficient funds`)

    }

    public getBalance(): number {
        return this.balance;
    }
}
const acount = new bankAccount('YoungBooprovjp',9000);
acount.deposit(500);
acount.withdraw(5800);
console.log(acount.getBalance);