class Ecommerce {

    static async getProdutos () {
        
        const response = await fetch ('https://m2-kenzie-shop.herokuapp.com/products')
        const data = await response.json()
        this.template(data)
    }

    static template (data) {
        const body = document.querySelector('body')
        const div = document.querySelector('div')
        body.appendChild(div)

        data.products.forEach(product =>{
            const vitrine = document.createElement('div')
            vitrine.classList.add('produtos')
            const imagem = document.createElement('img')
            const review = document.createElement('span')
            const nome = document.createElement('p')
            const promo = document.createElement('h3')
            const preco = document.createElement('h2')
            const button = document.createElement('button')

            nome.innerText = product.productName
            button.innerText = "Comprar"
            imagem.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${product.id}/Image.png`

            if (product.promotionStatus){
                promo.innerText = `De R$${product.price.productPrice}`
                preco.innerText = `Por R$${product.price.productPromotionPrice}`
            } else {
                preco.innerText = `R$${product.price.productPrice}`
            }
            if (product.reviews === 0){
                review.innerText = "☆☆☆☆☆"
            } else if (product.reviews === 1){
                review.innerText = "★☆☆☆☆"
            } else if (product.reviews === 2){
                review.innerText = "★★☆☆☆"
            } else if (product.reviews === 3){
                review.innerText = "★★★☆☆"
            } else if (product.reviews === 4){
                review.innerText = "★★★★☆"
            } else if (product.reviews === 5){
                review.innerText = "★★★★★"
            }


            vitrine.appendChild(imagem)
            vitrine.appendChild(review)
            vitrine.appendChild(nome)
            vitrine.appendChild(promo)
            vitrine.appendChild(preco)
            vitrine.appendChild(button)
            div.appendChild(vitrine)
        })
    }
}

Ecommerce.getProdutos()

