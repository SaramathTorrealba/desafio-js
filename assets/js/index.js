const precioPorUnidad= 40000;
function calculoTotal (){
  let cantidad = document.getElementById('cantidadId').value;
  let color = document.getElementById('colorId').value;
  let calculoCompra = precioPorUnidad * cantidad;
  cssColor = document.getElementById('colorTotal');
  cssColor.style.background = color;
  let parrafoCantidad = document.getElementById('cantidadResult').innerHTML= cantidad;
  parrafoTotal= document.getElementById('totalResult').innerHTML= calculoCompra;
}