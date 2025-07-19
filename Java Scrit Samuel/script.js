alert("Hello World")

//    var nombre = prompt("Ingresa tu nombre")
//    var edad = prompt("ingresa tu edad")
//    var LugarDeNacimiento = prompt("Ingresa tu lugar de nacimiento")

//    alert("Hola" + nombre + "tienes" + edad + "y naciste en" + LugarDeNacimiento)

//    document .write ("Hola" + nombre + "tienes" + edad + "y naciste en" + LugarDeNacimiento)

//    numeros = [1, 2, 3, 4]

//    document .write (numeros)

//    var a = prompt ("ingresa el numero de tu tarjeta de credito o debito")
//    var b = prompt ("ingresa el codigo de seguridad y la fecha de vencimiento")

//    if (a>b) {
//        alert("el numero" + a + "es mayor que" + b)
//    } else {
//        alert("el numero" + a + "es mayor que" + b)
//    }

    var comida = ["Pastas", "Tamal", "Palomas", "Cuy"]

//    document .write (comida)

//    var personajes = ["Balatro", "Paimon", "Nita", "Joker"]

//    document .write (personajes)

//    for(i=0; i<comida.legth; 1++){
//        alert (comida[i])
//    }

//    while (i< comida.length) {
//        alert(comida[i])
//        i++
//    }

opcion = prompt("seleccona tu opicion: 1: perro, 2: pizza, 3: Hamburguesa")

switch (opcion) {
    case "1":
        alert("aqui tienes tu perro")
        break;
    case "2":
        alert("aqui tienes tu pizza")
        break;
    case "3":
        alert("aqui tienes tu hamburguesa")
        break;
    default:
        alert("esta opcion no existe")
        break;
}