const shoppingChart = []
    


/*funcion para agregar carritos al item*/

const addProduct = (productId) => {

    const exist = shoppingChart.some (product => product.id === productId)
    if (exist) {
        alert ("El producto ya esta en el carrito")
    }
    else {
    const renderChartProducts = () => {
        let product = products.find (product => product.id == productId)
        shoppingChart.push(product)
        
    }
    renderChartProducts()
}



}

/* renderizar carrito */

const showChart = () => {

    const chart = document.getElementById ("shopping-chart")
    //limpio el carrito
    chart.innerHTML = ""
    //ciclo para renderizar items
    shoppingChart.forEach(product => {
        let div = document.createElement("div")
        div.classList.add("chartProduct")
        div.innerHTML = `<p>${product.name}</p>
                        <p class: "item-price">Precio: ${product.price}</p> 
                        <button id="deleteOnChart(${product.id})" class="boton-eliminar" >Eliminar</button>`;
        
        chart.appendChild(div) 
        //boton eliminar items
        const boton = document.getElementById ( `deleteOnChart(${product.id})`)
        boton.addEventListener ('click', () => {
            deleteOnChart(product.id)
        })      
        });
         //precio total
     const totalPrice = document.getElementById('totalPrice')
     totalPrice.innerText = shoppingChart.reduce((acumulador, item) => acumulador + item.price, 0)
}

/*funcion para eliminar items del carrito*/

const deleteOnChart = (productId) => {
    const item = shoppingChart.find((product) => product.id === productId)
    const index = shoppingChart.indexOf(item) //Busca indice del objeto por la id.
    shoppingChart.splice(index, 1)

    showChart()
}


