class Conta {
    titular;
    saldo;
    constructor(_titular, _saldo) {
        this.titular = _titular;
        this.saldo = _saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Você depositou R$ ${valor.toFixed(2)}. Novo saldo: R$ ${this.recuperarSaldo().toFixed(2)}`);
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.recuperarSaldo().toFixed(2)}`);
        }
        else {
            console.log(`Você não tem saldo suficiente. Saldo atual: R$ ${this.recuperarSaldo().toFixed(2)}`);
        }
    }
    recuperarSaldo() {
        return this.saldo;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setTitular(_titular) {
        this.titular = _titular;
    }
    setSaldo(_saldo) {
        this.saldo = _saldo;
    }
}
export default Conta;
//# sourceMappingURL=Conta.js.map