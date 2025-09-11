declare abstract class Conta {
    private titular;
    private saldo;
    constructor(_titular: string, _saldo: number);
    depositar(valor: number): void;
    sacar(valor: number): void;
    recuperarSaldo(): number;
    getTitular(): string;
    getSaldo(): number;
    setTitular(_titular: string): void;
    setSaldo(_saldo: number): void;
}
export default Conta;
//# sourceMappingURL=Conta.d.ts.map