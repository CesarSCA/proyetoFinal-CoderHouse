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
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}1" class="categorias__imagenes productos__imagen"></div><span>$100</span></div>
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}2" class="categorias__imagenes productos__imagen"></div><span>$100</span></div>
        <div class="caja__imagenes"><div id="categoria__${seleccionadas[index]}3" class="categorias__imagenes productos__imagen"></div><span>$100</span></div>
        </div>
        `
        if(seleccionadas[index] == "Cactus"){
            for (let i = 1; i < 4; i++) {
                document.getElementById(`categoria__Cactus${i}`).style.backgroundImage = `url(assets/categorias/Cactus/cactus${i}.jpg)`
            }
        } else if(seleccionadas[index] == "Macetas"){
            for (let i = 1; i < 4; i++) {
                let dsa = Math.floor((Math.random() * 18) + 1);
                document.getElementById(`categoria__Macetas${i}`).style.backgroundImage = `url(\"./assets/categorias/Macetas/macetas(${dsa}).jpg\")`
            }
        } else if(seleccionadas[index] == "Accesorios"){
            for (let i = 1; i < 4; i++) {
                let dsa = Math.floor((Math.random() * 18) + 1);
                document.getElementById(`categoria__Accesorios${i}`).style.backgroundImage = `url(\"./assets/categorias/Accesorios/accesorios(${dsa}).webp\")`
            }
        } else if(seleccionadas[index] == "Exterior"){
            for (let i = 1; i < 4; i++) {
                let dsa = Math.floor((Math.random() * 10) + 1);
                document.getElementById(`categoria__Exterior${i}`).style.backgroundImage = `url(\"./assets/categorias/PlantasExterior/exterior(${dsa}).jpg\")`
            }
        } else if(seleccionadas[index] == "Interior"){
            for (let i = 1; i < 4; i++) {
                let dsa = Math.floor((Math.random() * 38) + 1);
                document.getElementById(`categoria__Interior${i}`).style.backgroundImage = `url(\"./assets/categorias/PlantasInterior/interior(${dsa}).jpg\")`
            }
        } else if(seleccionadas[index] == "Suculentas"){
            for (let i = 1; i < 4; i++) {
                let dsa = Math.floor((Math.random() * 21) + 1);
                document.getElementById(`categoria__Suculentas${i}`).style.backgroundImage = `url(\"./assets/categorias/Suculentas/suculentas(${dsa}).jpg\")`
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


