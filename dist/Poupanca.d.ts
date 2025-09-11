import Conta from "./Conta.js";
declare class Poupanca extends Conta {
    private taxaRendimento;
    constructor(_titular: string, _saldo: number, _taxaRendimento: number);
    renderJuros(): void;
    getTaxaRendimento(): number;
    setTaxaRendimento(_taxaRendimento: number): void;
}
export default Poupanca;
//# sourceMappingURL=Poupanca.d.ts.map