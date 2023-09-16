function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#BF7E04'
} else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.jpg'
    document.body.style.background = '#F25C05'
} else {
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#D92534'
}
}