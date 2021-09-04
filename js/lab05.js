(function() {
    window.onload = function() {

        let nombre_apellido = document.getElementById("idname");
        let fecha_nacimiento = document.getElementById("iddate");
        let Appaterno = document.getElementById("idPaterno");
        let Apmaterno = document.getElementById("idMaterno");
        let nombre = document.getElementById("idnombre");
        let longitud = document.getElementById("idlongitud");
        let edad = document.getElementById("idedad");
        let mes = document.getElementById("idmes");
        let btnextraer = document.getElementById("btnextraer");
        let btncolorear = document.getElementById("btncolorear");


        function extraerDatos() {
            //Primero fracionamos las frases de apellidos y nombres

            if (nombre_apellido.value == "") {
                document.getElementById("idname").focus();
            } else {
                document.getElementById("iddate").focus();
            }

            if (nombre_apellido.value !== "" && fecha_nacimiento.value !== "") {

                let palabras = nombre_apellido.value.split(' ');
                //Extraer apellido paterno
                if (palabras[0] == null) {
                    Appaterno.value = "";
                } else {
                    Appaterno.value = palabras[0];
                    document.getElementById("idname").value = "";
                }

                //Extraer apellido materno
                if (palabras[1] == null) {
                    document.getElementById("idMaterno").value = "";
                } else {

                    document.getElementById("idMaterno").value = palabras[1];
                    nombre_apellido.value = "";
                }
                //Extraer nombre

                if (palabras[2] == null) {
                    document.getElementById("idnombre").value = "";
                } else {
                    document.getElementById("idnombre").value = palabras[2];
                    nombre_apellido.value = "";
                }

                //Extraer longitud del apellido
                document.getElementById("idlongitud").value = palabras[0].length + " Letras";

                //Extraer edad
                let anioCumple = document.getElementById("iddate").value.split('-');
                if (document.getElementById("iddate").value !== "") {
                    let fechaActual = new Date();
                    let anio_actual = fechaActual.getFullYear();

                    if (anioCumple[0] < anio_actual) {
                        let edad = anio_actual - anioCumple[0];
                        document.getElementById("idedad").value = edad + ' Años';
                        document.getElementById("iddate").value = "";
                    } else {
                        document.getElementById("idedad").value = 'Aun no a nacido';
                    }
                }
                // Mes en palabras
                let meses = [""];
                switch (anioCumple[1]) {
                    case "01":
                        meses = ["Enero"];
                        break;
                    case "02":
                        meses = ["Febrero"];
                        break;
                    case "03":
                        meses = ["Marzo"];
                        break;
                    case "04":
                        meses = ["Abril"];
                        break;
                    case "05":
                        meses = ["Mayo"];
                        break;
                    case "06":
                        meses = ["Junio"];
                        break;
                    case "07":
                        meses = ["Julio"];
                        break;
                    case "08":
                        meses = ["Agosto"];
                        break;
                    case "09":
                        meses = ["Septiembre"];
                        break;
                    case "10":
                        meses = ["Octubre"];
                        break;
                    case "11":
                        meses = ["Noviembre"];
                        break;
                    case "12":
                        meses = ["Diciembre"];
                        break;
                }
                document.getElementById("idmes").value = meses;
            }
        }

        // Metodos
        btnextraer.addEventListener('click', extraerDatos, true);
        //Cajas Azules 
        let cajaAzul1 = document.getElementById("textoFijo_color11");
        let cajaAzul2 = document.getElementById("textoFijo_color12");
        let cajaAzul3 = document.getElementById("textoFijo_color13");
        let cajaAzul4 = document.getElementById("textoFijo_color14");
        let cajaAzul5 = document.getElementById("textoFijo_color15");
        //Cajas Rojas
        let cajaRojo1 = document.getElementById("textoFijo_color21");
        let cajaRojo2 = document.getElementById("textoFijo_color22");
        let cajaRojo3 = document.getElementById("textoFijo_color23");
        let contador = 0;

        // Cambiando de color a las Cajas
        function colorearCajas() {
            if (contador == 0) {
                //Cajas Azules a Rojas
                cajaAzul1.classList.add('rojo');
                cajaAzul2.classList.add('rojo');
                cajaAzul3.classList.add('rojo');
                cajaAzul4.classList.add('rojo');
                cajaAzul5.classList.add('rojo');

                //Cajas Rojas a Azules
                cajaRojo1.classList.add('azul');
                cajaRojo2.classList.add('azul');
                cajaRojo3.classList.add('azul');
                contador = 1;

            } else {
                //Cajas rojas a Azules
                cajaAzul1.classList.remove('rojo');
                cajaAzul2.classList.remove('rojo');
                cajaAzul3.classList.remove('rojo');
                cajaAzul4.classList.remove('rojo');
                cajaAzul5.classList.remove('rojo');
                //Cajas Azules a rojas
                cajaRojo1.classList.remove('azul');
                cajaRojo2.classList.remove('azul');
                cajaRojo3.classList.remove('azul');
                contador = 0;
            }
        }
        btncolorear.addEventListener('click', colorearCajas, true);


    };
})();