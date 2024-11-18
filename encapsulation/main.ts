//main.ts
import { bankAccount } from "./bank";
const acount = new bankAccount("YoungBooprovjp", 9000);
acount.deposit(500);
acount.withdraw(5800);
console.log(acount.getBalance);
