import Conta from "./Conta.js";
class Corrente extends Conta {
    taxaManutencao;
    constructor(_titular, _saldo, _taxaManutencao) {
        super(_titular, _saldo);
        this.taxaManutencao = _taxaManutencao;
    }
    cobrarTaxa() {
        let saldo = this.recuperarSaldo();
        this.setSaldo(saldo - (this.taxaManutencao * saldo));
        console.log(`Taxa de manutenção cobrada. Novo saldo: ${this.recuperarSaldo().toFixed(2)}`);
    }
    getTaxaManutencao() {
        return this.taxaManutencao;
    }
    setTaxaManutencao(_taxaManutencao) {
        this.taxaManutencao = _taxaManutencao;
    }
}
export default Corrente;
//# sourceMappingURL=Corrente.js.map