export class Feriado {


  public codferiado: Number;
  public estado: String;
  public cidade: String;
  public descricao: String;
  public replicar: Number;
  public dataferiado: Date;



  public Feriado() {
  }

  public getCodFeriado() {
    return this.codferiado;
  }
  public getEstado() {
    return this.estado;
  }
  public getCidade() {
    return this.cidade;
  }
  public getDescricao() {
    return this.descricao;
  }
  public getReplicar() {
    return this.replicar;
  }
  public getDataFeriado() {
    return this.dataferiado;
  }
  public setCodFeriado(codferiado: number): void {
    this.codferiado = codferiado;
  }
  public setEstado(estado: String): void {
    this.estado = estado;
  }
  public setCidade(cidade: String): void {
    this.cidade = cidade;
  }
  public setDescricao(descricao: String): void {
    this.descricao = descricao;
  }
  public setReplicar(replicar: number): void {
    this.replicar = replicar;
  }
  public setDataferiado(dataferiado: Date): void {
    this.dataferiado = dataferiado;
  }
}
