let box = document.querySelector('.maravilhosas__box');

fetch('https://theblackwomanhistory.firebaseio.com/.json')

.then((response)=>{
    return response.json();
})

.then((data)=>{
    console.log('Deu certo!');
    console.log(data)
    
    data.content.forEach((mulheres)=>{

        console.log(mulheres, 'mulheres dentro do foreach')
        
        let perfilMulher = document.createElement('div');
        perfilMulher.setAttribute('class', 'maravilhosas__perfil');
        box.appendChild(perfilMulher);
        
        let linkMulher = document.createElement('a');
        linkMulher.setAttribute('href','#');
        perfilMulher.appendChild(linkMulher);

        let foto = document.createElement('img');
        foto.setAttribute('class', 'img-responsive');
        if (mulheres.metadata && mulheres.metadata.image) {
            foto.setAttribute('src', mulheres.metadata.image.url);
                } else {
                foto.setAttribute('src', './img/img-mulher.png');
            }
       
                 
        linkMulher.appendChild(foto);

        let nomeMulher = document.createElement('p');
        nomeMulher.textContent= mulheres.title;
        
        linkMulher.appendChild(nomeMulher);
        
    })
    
    })

.catch((erro)=>{
    console.log(erro)
})

