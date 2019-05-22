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
        linkMulher.setAttribute('href','#!');
        perfilMulher.appendChild(linkMulher);

        let foto = document.createElement('img');
        foto.setAttribute('class', 'img-responsive');
        foto.src = mulheres.metadata.image.url;
                
        linkMulher.appendChild(foto);

        let nomeMulher = document.createElement('p');
        nomeMulher.innerHTML= mulheres.title;
        
        linkMulher.appendChild(nomeMulher);
        
    })
    
    })

.catch((erro)=>{
    console.log(erro)
})

