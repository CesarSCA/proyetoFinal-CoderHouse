window.addEventListener("load", function() {
    let numero = 1
    var a = ["Cactus","Interior","Exterior","Jardin","Trepaderas","Aquaticas"]
    var res = a.sort(function() {
    return 0.5 - Math.random();
    });
    let seleccionadas = res.slice(a[numero],4)
    for (let index = 0; index < 4; index++) {
        document.getElementById(`producto__categoria${numero}`).innerHTML+= `
        <h2>${(seleccionadas[index])}</h2>
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
        } else if(seleccionadas[index] == "Interior"){
            for (let i = 1; i < 4; i++) {
                document.getElementById(`categoria__Interior${i}`).style.backgroundImage = `url(assets/categorias/plantasPequeñas/planta${i}.jpg)`
            }
        } else {
            for (let i = 1; i < 4; i++) {
                document.getElementById(`categoria__${seleccionadas[index]}${i}`).style.backgroundColor = `rgba(217, 227, 236, 0.952)`
            }
        }
        numero++


        
    }
})


