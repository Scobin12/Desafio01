//Vídeo de inspiração https://www.youtube.com/watch?v=j6mKJjguA-8 (algumas coias não entendi muito bem, mas o geral sim)

const card = [
    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_721538-MLU73425695145_122023-O.webp",
        titulo: "Edge 30 Neo 5g",
        valor: "R$ 1.503,00",
        descricao: "Smartphone Edge 30 Neo 5g 256gb 8gb Ra..."

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_865169-MLA54833481393_042023-O.webp",
        titulo: "PlayStation 4",
        valor: "R$ 2.135,00",
        descricao: "Sony PlayStation 4 1TB Standard cor preto..."

    },
    
    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_662695-MLU70909986097_082023-O.webp",
        titulo: "Ssd Hd Kingston",
        valor: "R$ 180,00",
        descricao: "Ssd Hd Kingston 240 Gb Cor Preto Rápido..."

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp",
        titulo: "Iphone 11",
        valor: "R$ 2.079,00",
        descricao: "Apple iPhone 11 (64 GB) - Preto"

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_828937-MLB53158314519_012023-F.webp",
        titulo: "Moletom Rikudou Sennin",
        valor: "R$ 78,90",
        descricao: "Moletom Rikudou Sennin Sabio Seis Camin..."

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_600810-MLU72833534625_112023-O.webp",
        titulo: "Spider-man 2",
        valor: "R$ 312,00",
        descricao: "Marvel's Spider-man 2 - Ps5"

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp",
        titulo: "Nintendo Switch",
        valor: "R$ 2.200,00",
        descricao: "Nintendo Switch OLED 64GB Standard cor bran..."

    },

    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_986177-MLU73187129209_122023-O.webp",
        titulo: "Fone sem fio JBL",
        valor: "R$ 206,00",
        descricao: "Fone de ouvido sem fio JBL Tune 520BT preto"

    }
]

const caixaCards = document.querySelector(".listaProdutos")

const postMethods = ()=>{
    card.map((postData)=>{
        const caixaCard = document.createElement("div")
        caixaCard.classList.add("cards")
        caixaCard.innerHTML = `
            <img src="${postData.imagem}" alt="imagem">
            <div class="escrita">
            <h4>${postData.titulo}</h4>
            <p class="valor">${postData.valor}</p>
            <p class="descricao">${postData.descricao}</p>
            </div>
        `
        caixaCards.appendChild(caixaCard)
    })
}
postMethods()