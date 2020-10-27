export class Funcionarios {
    public codfunc: Number;
    public nome: String;
    public endereco: String;
    public numero: String;
    public complemento: String;
    public bairro: String;
    public cep: String;
    public cidade: String;
    public uf: String;
    public telefone: Number;
    public observacoes: String;

    constructor(codfunc?: number, nome?: String, endereco?: String, numero?: String, complemento?: String, bairro?: String,
        cep?: String, cidade?: String, uf?: String, telefone?: Number, observacoes?: String ) {
            this.codfunc = codfunc;
            this.nome = nome;
            this.endereco = endereco;
            this.numero = numero;
            this.complemento = complemento;
            this.bairro = bairro;
            this.cep = cep;
            this.cidade = cidade;
            this.uf = uf;
            this.telefone = telefone;
            this.observacoes = observacoes;       
    }


}
