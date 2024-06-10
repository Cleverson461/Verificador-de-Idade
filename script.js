function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')

  if(fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERROR] Verifique os dados e tente novamente')
  }else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'bebeHomem.png')
       
      }else if(idade < 21){
        img.setAttribute('src', 'jovemMasculino.png')
 
      }else if(idade < 50){
        img.setAttribute('src', 'adultoHomem.png')

      }else{
        img.setAttribute('src', 'vovoHomem.png')

      }


    }else if(fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
       img.setAttribute('src', 'bebeMulher.png')

       }else if(idade < 21){
        img.setAttribute('src', 'jovemFeminina.png')
        
        }else if(idade < 50){
        img.setAttribute('src', 'adultoMulher.png')
        
        }else{
        img.setAttribute('src', 'vovoMulher.png')

      }
    }
    res.style.textAlin = 'center'
    res.innerHTML = `Sexo: ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
