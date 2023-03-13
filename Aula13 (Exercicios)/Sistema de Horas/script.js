function carregar() {
    let msg = document.querySelector('#msg')
    let foto = document.querySelector('#imagem')
    let agora = new Date()
    let hora = 18
    let body = document.querySelector('#corpo')

    msg.innerHTML = `Agora são ${hora} Horas.`
    
    if (hora >= 0 && hora < 5) {
        // Boa Madrugada

        document.body.style.backgroundColor = 'rgb(82, 92, 95)'
        foto.src = 'https://images.pexels.com/photos/5727306/pexels-photo-5727306.jpeg'
    }
    else if (hora >= 5 && hora < 12) {
        // Bom Dia
        
        document.body.style.backgroundColor = 'rgb(241, 236, 160)'
        foto.src = 'https://images.pexels.com/photos/2228889/pexels-photo-2228889.jpeg'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde

        document.body.style.backgroundColor = 'rgb(233, 164, 74)'
        foto.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg'
    } else if (hora >= 18) {
        // Boa Noite

        document.body.style.backgroundColor = 'rgb(20, 20, 53)'
        foto.src = 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg'
    }
    
}
