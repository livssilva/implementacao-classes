abstract class Conta {
    private titular: string;
    private saldo: number;

    constructor(_titular: string, _saldo: number) {
        this.titular = _titular;
        this.saldo = _saldo;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Foi depositado R$ ${valor.toFixed(2)}. Novo saldo: R$ ${this.recuperarSaldo().toFixed(2)}`);
    }

    public sacar(valor: number): void {
        if (this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.recuperarSaldo().toFixed(2)}`);
        }
        else {
            console.log(`Você não tem saldo suficiente. Saldo atual: R$ ${this.recuperarSaldo().toFixed(2)}`);
        }
    }

    public recuperarSaldo(): number {
        return this.saldo;
    }


    public getTitular(): string {
        return this.titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setTitular(_titular: string): void {
        this.titular = _titular;
    }

    public setSaldo(_saldo: number): void {
        
        this.saldo = _saldo;
    }
}

export default Conta;