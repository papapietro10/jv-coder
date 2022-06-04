/*const bienvenidos = "¡Bienvenid@! El evento empezara pronto";
const soporte = 'Igrese al siguiente link para contactar a un agente 👉🏻 https://www.google.com/';
const oro = 'oro';
const plata = 'plata';
const bronce = 'bronce';
let  entradas = (prompt('Ingrse el color de su entrada:'));
for(let i = 0; i < 3; i++){
if (entradas == ('') ){
alert('No agregaste una entrada');
console.log('No agregaste una entrada');
}

 if (entradas == oro || String.toUpperCase(oro)){
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
entradas = (prompt('Ingrse el color de su entrada:'));
document.write(soporte)
console.log(soporte)
} }

const productos = [
    'papas',
    'choclo',
    'banana'
]

for(let i = 0; i < 3; i++){
document.write( productos[i])
document.write( productos[i])
document.write( productos[i])
}

var partidas = prompt("Cuántas partidas quieres jugar?");

                for (i=0;i<partidas;i++){
                    usuario = prompt("piedra, papel o tijera...");
                    if (usuario == "piedra") {
                        alert("Papel! Gané!");
                    } else if (usuario == "tijera") {
                        alert("Piedra! Gané!");
                    } else if (usuario == "papel") {
                        alert("Tijera! Gané!")
                    } else {
                        alert("Eso no existe tramposo. Intenta de nuevo");
                        i-=1;
                        continue;
                    }
                    alert(`Perdiste ${i+1} partida/s`);
                }


const ganadorSorteo = "@mnaiara22"

let nombreGanador = prompt ("Ingrese su nombre de instagram para continuar")

if (nombreGanador == ganadorSorteo) {

alert ("Bienvenido/a " + nombreGanador + " has ganado el sorteo por las 3 entradas para TINI, a continuacion deberas confirmar quienes seran las 3 personas que iran al evento")

//n ++ = n+1
for (let n = 1; n <= 3; n++) {
    let ingresarNombre = prompt("Ingresar nombre");
    alert(" Persona nro. "+ n +" Invitado: "+ingresarNombre);
}

alert ("Gracias por ingresar a tus invitados, pronto nos pondremos en contacto con vos!")

} else {
    alert ("Lamentablemente no ganaste, no dudes en seguir participando")
}


else if ( entradas == 'plata' || (entradas == 'Plata')){
    alert('sos parte de la zona media del evento');
    }
    else if (entradas == 'bronce' || (entradas ==bronce)){
    alert('sosparte de la zona general del evento');
    } else{
        alert('No ingresaste una entrada valida')
    }
    }



    costoTotal = zapatillaCostoNike1 + zapatillaCostoAdidas2 + zapatillaCostoPuma3;
console.log(costoTotal);
alert("Tus productos tienen un subtotal de $" + costoTotal) 
costoFinal = costoTotal * 1.21;
alert("El total de tu compra + IVA es de $" + costoFinal);
alert("Si desea continuar con la compra, haga click en aceptar");
break
}



function agregarAlCarrito(producto, precio, stock){

    const resultadoFinal =  `Pedro agregaste el producto al carrito ${producto} qeu sale $${precio}y tiene de stock ${stock}`
    return resultadoFinal;
}

alert(agregarAlCarrito (producto1, 9000, 2));
//console.log(resultadoFinal);

/*
const producto1 = (prompt("Ingresa el producto que queres"));
const zapatilla = 'nike'
let zapatillaCostoNike1 = 6000
const zapatilla2 = 'adidas'
let zapatillaCostoAdidas2 = 9000
const zapatilla3 = 'puma'
let zapatillaCostoPuma3 = 2000

for (let i = 0; i <= 1; i++) {
if (producto1 <= ('') ){
alert('No agregaste un producto')+ producto1}
if(queresSeguir === ('si')){
    producto1 == zapatilla}}
    if(producto1 === zapatilla){
(alert(zapatillaCostoNike1))
queresSeguir = prompt ('Queres seguir comprando?')}
if(queresSeguir === ('si')){
producto1 = (prompt("Ingresa el producto que queres"));
}
if(producto1 === zapatilla2){
(alert(zapatillaCostoAdidas2))
}
if(queresSeguir === ('si')){
producto1 = (prompt("Ingresa el producto que queres"));
}

if(producto1 == zapatilla3){
costoTotal = zapatillaCostoPuma3;
alert(costoTotal)
}

else{
alert('No agregasyte a zapa correcta ')}


/*
const producto1 = (prompt("Ingresa el producto que queres"));
const zapatilla = 'nike'
let zapatillaCostoNike1 = 6000
const zapatilla2 = 'adidas'
let zapatillaCostoAdidas2 = 9000
const zapatilla3 = 'puma'
let zapatillaCostoPuma3 = 2000

for (let i = 0; i <= 1; i++) {
if (producto1 <= ('') ){
alert('No agregaste un producto')+ producto1}
if(queresSeguir === ('si')){
    producto1 == zapatilla}}
    if(producto1 === zapatilla){
(alert(zapatillaCostoNike1))
queresSeguir = prompt ('Queres seguir comprando?')}
if(queresSeguir === ('si')){
producto1 = (prompt("Ingresa el producto que queres"));
}
if(producto1 === zapatilla2){
(alert(zapatillaCostoAdidas2))
}
if(queresSeguir === ('si')){
producto1 = (prompt("Ingresa el producto que queres"));
}

if(producto1 == zapatilla3){
costoTotal = zapatillaCostoPuma3;
alert(costoTotal)
}

else{
alert('No agregasyte a zapa correcta ')}












const tituloDelcitioweb = 'Hola'
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


/*
 if (entradas == oro || String.toUpperCase(oro)){
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
entradas = (prompt('Ingrse el color de su entrada:'));
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









const tituloDelcitioweb = 'Hola'
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


/*
 if (entradas == oro || String.toUpperCase(oro)){
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
entradas = (prompt('Ingrse el color de su entrada:'));
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