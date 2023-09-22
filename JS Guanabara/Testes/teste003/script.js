function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} Horas!`
if (hora >= 0 && hora < 12) {   
        img.scr = 'fotomanha01.jpg' 
        document.body.style.background = '#F2B872'
} else if (hora >= 12 && hora <= 18) {
   img.scr = 'fototarde01.jpg'
   document.body.style.background = '#F2762E'
} else {
   img.scr = 'fotonoite.jpg'
   document.body.style.background = '#F71B14'
}
}