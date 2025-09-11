import Conta from "./Conta.js";
declare class Corrente extends Conta {
    private taxaManutencao;
    constructor(_titular: string, _saldo: number, _taxaManutencao: number);
    cobrarTaxa(): void;
    getTaxaManutencao(): number;
    setTaxaManutencao(_taxaManutencao: number): void;
}
export default Corrente;
//# sourceMappingURL=Corrente.d.ts.map