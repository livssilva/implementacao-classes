import Corrente from "./Corrente.js";
import Poupanca from "./Poupanca.js";
let contaCorrente = new Corrente("Felisberto Felis", 1000, 0.08);
let contaPoupanca = new Poupanca("Joselito Rodrigues,", 200, 0.06);
console.log("Conta Corrente:");
contaCorrente.depositar(200);
contaCorrente.cobrarTaxa();
contaCorrente.sacar(2000);
console.log(`Seu saldo atual é: R$ ${contaCorrente.recuperarSaldo().toFixed(2)}`);
console.log("Conta Poupanca:");
contaPoupanca.depositar(75.12);
contaPoupanca.renderJuros();
contaPoupanca.sacar(100);
console.log(`Seu saldo atual é: R$ ${contaPoupanca.recuperarSaldo().toFixed(2)}`);
//# sourceMappingURL=main.js.map