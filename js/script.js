let box = document.querySelector('.maravilhosas__box');

fetch('http://localhost:5001/maravilhosas')

    .then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log('Deu certo!');
        console.log(data)

        data.content.forEach((mulheres) => {

            console.log(mulheres, 'mulheres dentro do foreach')

            let perfilMulher = document.createElement('div');
            perfilMulher.setAttribute('class', 'maravilhosas__perfil');
            box.appendChild(perfilMulher);

            let linkMulher = document.createElement('a');
            linkMulher.setAttribute('href', '#');
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
            nomeMulher.textContent = mulheres.title;

            linkMulher.appendChild(nomeMulher);


            // delete



            const button2 = document.createElement('button');
            button2.setAttribute('data-id', mulheres.id);
            button2.textContent = '✖';
            linkMulher.appendChild(button2)


            button2.addEventListener('click', () => {
                const thisCard = button2.parentElement;
                const cardMae = thisCard.parentElement;
                
                
                fetch(`http://localhost:5001/maravilhosas/${mulheres.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                                       
                })
                
                .then((response) => {

                    cardMae.removeChild(thisCard)
                    console.log('Sucesso!')


                    

                    })
                    .catch((erro) => {
                        console.log(erro)

                    })
            })
        })

    })

    .catch((erro) => {
        console.log(erro)
    })


const button = document.getElementById('button');
button.addEventListener('click', (submeter) => {
    submeter.preventDefault();

    const nome = document.getElementById('nome').value;
    const imagem = document.getElementById('imagem').value;


    fetch('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata': {
                'image': {
                    'url': imagem,
                }
            }
        })

    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

        })

        .catch((erro) => {
            console.log(erro);
        })

    location.reload(true)
})

