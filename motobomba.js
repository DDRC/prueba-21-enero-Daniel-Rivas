class Motobomba{
  constructor(codigo,bb=[]){
    this.codigo=codigo;
    this.bb=bb;
  }
  addBombero(bomberman){
    this.bb.push(bomberman);
  }
}