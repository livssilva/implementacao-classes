import Conta from "./Conta.js";
class Poupanca extends Conta {
    taxaRendimento;
    constructor(_titular, _saldo, _taxaRendimento) {
        super(_titular, _saldo);
        this.taxaRendimento = _taxaRendimento;
    }
    renderJuros() {
        let saldo = this.recuperarSaldo();
        this.setSaldo(saldo + (saldo * this.taxaRendimento));
        console.log(`Juros rendidos. Saldo atual: ${this.recuperarSaldo().toFixed(2)}`);
    }
    getTaxaRendimento() {
        return this.taxaRendimento;
    }
    setTaxaRendimento(_taxaRendimento) {
        this.taxaRendimento = _taxaRendimento;
    }
}
export default Poupanca;
//# sourceMappingURL=Poupanca.js.map