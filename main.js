
/*const tituloDelcitioweb = 'Hola'
const boTon = '<button type="button" class='

document.write(tituloDelcitioweb);

//let numberUno = 1;
//let numberTres = 3;

//let resultado = numberUNO+numberTres;

//document.write(resultado);

const textoUno = 'Tu nombre es:';
const textoDos = prompt('Mi nombre es:');

alert(`Tu nombre es: ${ textoDos}`);

let costoTotal = 0;
let costoFinal = 0;
for (let i = 0; i <= 3; i++) {
let valor1 = parseInt(prompt("Ingrese el costo del primer producto"));
let valor2 = parseInt(prompt("ingrese el costo del segundo producto"));
let valor3 = parseInt(prompt("ingrese el costo del tercer producto"));
costoTotal = valor1 + valor2 + valor3;
console.log(costoTotal);
alert("Tus productos tienen un subtotal de $" + costoTotal) 
costoFinal = costoTotal * 1.21;
alert("El total de tu compra + IVA es de $" + costoFinal);
alert("Si desea continuar con la compra, haga click en aceptar");
break
}*/


/*const edad = 19;
const tieneEntrada = true;
const hijoDelDuenio = false;

if((edad >=18 && tieneEntrada) || hijoDelDuenio){
    console.log("podes entrar")
}else{
    console.log("no podes entrar")
}*/
const bienvenidos = "¡Bienvenid@! El evento empezara pronto";
const soporte = 'Igrese al siguiente link para contactar a un agente 👉🏻 https://www.google.com/';
const oro = 'oro';
const plata = 'plata';
const bronce = 'bronce';
const  entradas = (prompt('Ingrse el color de su entrada:'));

while(entradas == ('') ){
alert('No agregaste una entrada');
console.log('No agregaste una entrada');
document.write(soporte)}

 if (entradas == oro || (entradas == 'Oro')){
alert('Sos parte de la zona vip del evento');
console.log('Sos parte de la zona vip del evento');
document.write(bienvenidos);
console.log(bienvenidos);}


else if ( entradas == plata || (entradas == 'Plata')){
alert('sos parte de la zona media del evento')
console.log('sos parte de la zona media del evento')
document.write(bienvenidos)
console.log(bienvenidos)}

else if (entradas == bronce || (entradas ==bronce)){
alert('sosparte de la zona general del evento')
console.timeLog('sosparte de la zona general del evento')
document.write(bienvenidos)
console.log(bienvenidos)
} 
else {
alert("No ingresate una entrada valida");
console.log("No ingresate una entrada valida")
document.write(soporte)
console.log(soporte)
} 


    

/*
if (entradas == 'oro'){
alert("sos parte de la zona vip del evento");
console.log('sos parte de la zona vip del evento');
document.write(bienvenidos);
console.log(bienvenidos)
}

if (entradas === 'oro'){
    console.log('oro');
    alert("sos parte de la zona vip del evento");
    console.log('sos parte de la zona vip del evento');
    document.write(bienvenidos);
    console.log(bienvenidos)
} 
if (entradas === 'plata'){
    console.log('plata')
    alert('Sos parte de la zona media del evento')
    console.log('Sos parte de la zona media del evento')
    documento
   }
*/


/*if (tipoDeEntradaUno === 'oro'){
console.log('Tetoca la zona vip del evento')
}
if (tipoDeEntradaDos === 'plata'){
    console.log('Tetoca la zona media del evento')
} else{
console.log('Verifique su entrada en sector de la entrada')
}*/

/*
if (entradas <= ('') ){
    alert('No agregaste una entrada');
    console.log('No agregaste una entrada');
    prompt("Ingrse el color de su entrada:");
    document.write(soporte)
    }else{
        alert("ingresa una entrada valida");
        prompt("Ingrse el color de su entrada:");
    }
    */

    /*if (entradas == 'plata' || (entradas == 'Plata')){
    alert('Sos parte de la zona media del evento');
    console.log('sos parte de la zona media del evento');
    document.write(bienvenidos); 
    console.log('sos parte de la zona media del evento');
}
if (entradas == 'bronce'|| (entradas == 'Plata')){
    alert('Sos parte de la zona general del evento');
    console.log('Sos parte de la zona general del evento');
    document.write(bienvenidos);
}else {
    alert('no ingresaste un color correcto')
    entradas = prompt('Ingrse el color de su entrada:')
}*/

   //location.href = 'http://google.com/search'