

var listaB=document.getElementById("listaBom");
var listaM=document.getElementById("listaMot");
var lBomberos=[];
var lMotobombas=[];
function agregarListaBomberos() {
  listaB.innerHTML="";
  let nombre=document.getElementById("nomBom").value;
let fecha=document.getElementById("bornBom").value;
  let nuevoBombero=new Bombero(nombre,parseInt(fecha));
lBomberos.push(nuevoBombero);
for (let i = 0; i < lBomberos.length; i++) {
  let op=document.createElement("option");
  op.setAttribute("value",i);
  op.appendChild(document.createTextNode(lBomberos[i].nombre));
  listaB.appendChild(op);
}
}
function agregarListaMotobombas() {
  listaM.innerHTML="";
  let codigo=document.getElementById("codMot").value;
  let nuevaMotobomba=new Motobomba(codigo);
lMotobombas.push(nuevaMotobomba);
for (let i = 0; i < lMotobombas.length; i++) {
  let op=document.createElement("option");
  op.setAttribute("value",i);
  op.appendChild(document.createTextNode(lMotobombas[i].codigo));
  listaM.appendChild(op);
}
}

function asociar() {
  let indices=[];
  for (let b = 0; b < listaM.options.length; b++) {
    if (listaM.options[b].selected==true) {
      indices.push(b)
    }
  }
  for (let a = 0; a < listaB.options.length; a++) {
    if (listaB.options[a].selected==true) {
      for (let c = 0; c < indices.length; c++) {
        lMotobombas[indices[c]].addBombero(lBomberos[a]);   
      }
    } else {
      console.log("a la vivora de la mar");
    }    
  }
}