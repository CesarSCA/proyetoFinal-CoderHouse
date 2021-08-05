window.addEventListener("load", function() {
    let numero = 1
    var a = ["Accesorios", "Macetas", "Exterior", "Interior", "Suculentas"]
    var res = a.sort(function() {
    return 0.5 - Math.random();
    });
    let seleccionadas = res.slice(a[numero],4)
    for (let index = 0; index < 4; index++) {
        document.getElementById(`producto__categoria${numero}`).innerHTML+= `
        <div class="titulo__productos" style="display: flex; flex-direction: row;">
            <h2>${(seleccionadas[index])}</h2>
            <span class="vermas"><a href="./categorias/subcategorias/${seleccionadas[index]}.html">ver mas</a></span>
        </div>
        <div class="contenedorIMG">
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}1" class="categorias__imagenes productos__imagen"></div><div class="precioNombre"><span class="nombresProductos" id="nombre__${seleccionadas[index]}1">Aun sin nombre</span><span class="preciosProductos" id="precio__${seleccionadas[index]}1">$0</span></div></div>
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}2" class="categorias__imagenes productos__imagen"></div><div class="precioNombre"><span class="nombresProductos" id="nombre__${seleccionadas[index]}2">Aun sin nombre</span><span class="preciosProductos" id="precio__${seleccionadas[index]}2">$0</span></div></div>
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}3" class="categorias__imagenes productos__imagen"></div><div class="precioNombre"><span class="nombresProductos" id="nombre__${seleccionadas[index]}3">Aun sin nombre</span><span class="preciosProductos" id="precio__${seleccionadas[index]}3">$0</span></div></div>
        </div>
        `
         
        if(seleccionadas[index] == "Macetas"){
            var asd = []
            for (let num = 1; num < 16; num++){
                    asd.push(num)
            }
            var rest = asd.sort(function() {
            return 0.5 - Math.random();
            });
            let numeros = rest.slice(asd,3)
            console.log()
            for (let i = 1; i < 4; i++) {
                var total = i - 1
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundImage = `url(\"./assets/categorias/Macetas/macetas(${numeros[total]}).jpg\")`
                var nombres = ["Maceta ceramica tortuga", "Maceta ceramica oso panda", "Maceta ceramica", "Maceta ceramica cactus", "Maceta ceramica llama", "Maceta tronco", "Maceta plastica", "Maceta tronco", "Pack de macetas plasticas", "Pack de macetas plasticas", "Maceta ceramica perro", "Maceta ceramica zorro", "Maceta ceramica perro", "Maceta ceramica cisne", "Maceta ceramica "]
                var precios = ["$500", "$450", "$320", "$400", "$550", "$300", "$100", "$300", "$280", "$380", "$400", "$400", "$420", "$520", "c/u $450"]
                for (let ind = 1; ind < 16; ind++) {
                    if(ind == numeros[total]){
                        var total2 = numeros[total] - 1
                        document.getElementById(`nombre__${seleccionadas[index]}${i}`).innerHTML=`${nombres[total2]}` 
                        document.getElementById(`precio__${seleccionadas[index]}${i}`).innerHTML=`${precios[total2]}` 
                    }
                }
            }
        } else if(seleccionadas[index] == "Accesorios"){
            var asd = []
            for (let num = 1; num < 18; num++){
                    asd.push(num)
            }
            var rest = asd.sort(function() {
            return 0.5 - Math.random();
            });
            let numeros = rest.slice(asd,3)
            console.log()
            for (let i = 1; i < 4; i++) {
                var total = i - 1
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundImage = `url(\"./assets/categorias/Accesorios/accesorios(${numeros[total]}).webp\")`
                var nombres = ["Sustrato", "Alimento organico", "Maceta plastica", "Pack de jardineria", "Fertilizante perlita", "Kit de jardineria", "Fertilizante perlita", "Pistola de riego", "Sustrato poroso", "Utensillos de jardineria", "Tijera de podar", "Piedritas para suculentas", "Piedritas para suculentas", "Perlita para plantas", "Piedritas para suculentas", "Sapito regador", "Manguera"]
                var precios = ["$890", "$280", "$100", "$5800", "$200", "$2800", "$250", "$290", "$280", "$810", "$975", "c/u $110", "c/u $110", "$250", "$100", "$199", "$1800"]
                for (let ind = 1; ind < 18; ind++) {
                    if(ind == numeros[total]){
                        var total2 = numeros[total] - 1
                        document.getElementById(`nombre__${seleccionadas[index]}${i}`).innerHTML=`${nombres[total2]}` 
                        document.getElementById(`precio__${seleccionadas[index]}${i}`).innerHTML=`${precios[total2]}` 
                    }
                }
            }
        } else if(seleccionadas[index] == "Exterior"){
            var asd = []
            for (let num = 1; num < 12; num++){
                    asd.push(num)
            }
            var rest = asd.sort(function() {
            return 0.5 - Math.random();
            });
            let numeros = rest.slice(asd,3)
            console.log()
            for (let i = 1; i < 4; i++) {
                var total = i - 1
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundImage = `url(\"./assets/categorias/PlantasExterior/exterior(${numeros[total]}).jpg\")`
                var nombres = ["Cyperus papyrus", "Rosa", "Petunia", "Flor de azucar", "Geranio", "Damasquina", "Damasquina", "Vacio", "Alisum", "Lavanda", "Ledebouria"]
                var precios = ["$990","$600", "$120", "$100", "$150", "$90", "$90", "$0", "$50", "$500", "$0"]
                for (let ind = 1; ind < 12; ind++) {
                    if(ind == numeros[total]){
                        var total2 = numeros[total] - 1
                        document.getElementById(`nombre__${seleccionadas[index]}${i}`).innerHTML=`${nombres[total2]}` 
                        document.getElementById(`precio__${seleccionadas[index]}${i}`).innerHTML=`${precios[total2]}` 
                    }
                }
            }
        } else if(seleccionadas[index] == "Interior"){
            var asd = []
            for (let num = 1; num < 18; num++){
                    asd.push(num)
            }
            var rest = asd.sort(function() {
            return 0.5 - Math.random();
            });
            let numeros = rest.slice(asd,3)
            console.log()
            for (let i = 1; i < 4; i++) {
                var total = i - 1
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundImage = `url(\"./assets/categorias/PlantasInterior/interior(${numeros[total]}).jpg\")`
                var nombres = ["Dolar dorado", "Lechero rojo", "Dolar negro", "Cretona", "Dolar matizado", "Cretona", "Hiedra matizada", "Helecho", "Begonia ala de angel", "Begonia brasilera", "Diplanemia Tropic", "Singonio", "Cretona", "Potus", "Begonia erythrophylla", "Iresine", "Sansevieria amarilla"]
                var precios = ["$200", "$200", "$200", "$150", "$200", "$200", "$300", "$500", "$600", "$600", "$800", "$400", "$200", "$450", "$800", "$450", "$800"]
                for (let ind = 1; ind < 18; ind++) {
                    if(ind == numeros[total]){
                        var total2 = numeros[total] - 1
                        document.getElementById(`nombre__${seleccionadas[index]}${i}`).innerHTML=`${nombres[total2]}` 
                        document.getElementById(`precio__${seleccionadas[index]}${i}`).innerHTML=`${precios[total2]}` 
                    }
                }
            }
        } else if(seleccionadas[index] == "Suculentas"){
            var asd = []
            for (let num = 1; num < 19; num++){
                    asd.push(num)
            }
            var rest = asd.sort(function() {
            return 0.5 - Math.random();
            });
            let numeros = rest.slice(asd,3)
            console.log()
            for (let i = 1; i < 4; i++) {
                var total = i - 1
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundImage = `url(\"./assets/categorias/Suculentas/suculentas(${numeros[total]}).jpg\")`
                var nombres = ["Cactus de navidad", "Crassula capitella", "Echeveria elegans", "Echeveria laui", "Kalanchoe pinnata", "Pilea", "Sedum morganianum", "Sedum nussbaumerianum", "Sedum rubrotinctum", "Crassula perforata", "Aptenia cordifolia", "Portulaca grandiflora", "Cactus opuntia", "Sedum dasyphyllum", "Cactus", "Sedum palmeri", "Crassula ovata", "Cactus opuntia",]
                var precios = ["$500", "$250", "$420", "$150", "$700", "$1000", "$300", "$200", "$200", "$250", "$120", "$150", "$350", "$100", "$400", "$150", "$250", "$350"]
                for (let ind = 1; ind < 19; ind++) {
                    if(ind == numeros[total]){
                        var total2 = numeros[total] - 1
                        document.getElementById(`nombre__${seleccionadas[index]}${i}`).innerHTML=`${nombres[total2]}` 
                        document.getElementById(`precio__${seleccionadas[index]}${i}`).innerHTML=`${precios[total2]}` 
                    }
                }
            }
        }
        else {
            for (let i = 1; i < 4; i++) {
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundColor = `rgba(217, 227, 236, 0.952)`
            }
        }
        numero++



    }
})


