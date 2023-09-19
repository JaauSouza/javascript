function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO} Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Criança
                img.setAttribute('src' , 'fotohomembb.jpg')
            } else if (idade < 11) {
                img.setAttribute('src' , 'fotohomemcriança.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src' , 'fotohomemadolecente.jpg')
            } else if (idade < 50) {
                // Adulto 
                img.setAttribute('src' , 'fotohomemadulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src' , 'fotohomemvelho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                } else if (idade < 21) {
                    // jovem
                } else if (idade < 50 ) {
                    // Adulto 
                } else {
                    // Idoso
                }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
            res.appendChild(img)
        }
    }
}