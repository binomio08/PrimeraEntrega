alert("Bienvenid@s a\n**********************\nPAGO MIS CUENTAS\n**********************")

let nombreUsuraio = prompt("Ingrese Nombre de usuario")

function mostrarMenu(){
    let opcion = parseInt(prompt("Hola "+nombreUsuraio+ " Seleccione un servio a pagar (ESC para Salir)\n 1)_EDESUR\n 2)_METROGAS\n 3)_AYSA\n 4)_ARBA"))

    return(opcion)
}

function seleccion(){
    let opcionSelecionada = mostrarMenu()
    while(opcionSelecionada !== "ESC"){
        if(opcionSelecionada !== ""){

            if(!isNaN(opcionSelecionada)){
                switch(opcionSelecionada){
                    case 1:
                        alert("El total abonado a abonar es: $3000")
                    break;
                    case 2:
                        alert("EL total a abonar es: $2500")
                    break;
                    case 3:
                        alert("EL total a abonar es: $2600")
                        break;
                    case 4:
                        alert("EL total a abonar es: $1500")
                        break;

                    default:
                        alert("Opción incorrecta")
                        break;
            }
            
        }
        else{
            alert("Ingreso una letra")
        }
        

    }

        else{
            alert("Ingreso una letra")
    }
        opcionSelecionada = mostrarMenu()
}

}
seleccion()