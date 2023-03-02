function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `<p>BOM DIA!</p>`
        img.src = 'img/manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `<p>BOA TARDE!<p>`
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += `<p>BOA NOITE!</p>`
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}
