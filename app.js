function pesquisar() {
    
     //Obtém a seção HTML onde os resultados serão exibidos.
     //A variável 'section' armazena uma referência a essa seção.
     
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Não encontramos sua busca</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
     //Inicializa uma string vazia para armazenar o HTML dos resultados.
     //A cada iteração do loop, mais HTML será adicionado a essa string.
     
    let resultados = "";
    let titulo = "";
    let descricao = "";
    //let tags = "";

    
     //Itera sobre os dados da pesquisa.
     // Para cada objeto 'dado' no array 'dados':
     //Cria um bloco HTML para representar um resultado.
     //Adiciona o HTML gerado à string 'resultados'.
     
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //tags = dado.tags.toLowerCase()
        // se no dado titulo include campoPesquisa
        //console.log(dado.titulo.includes(campoPesquisa))
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        // Cria uma div com a classe 'item-resultado' para cada resultado.
         //Insere os dados do resultado (título, descrição, etc.) dentro da div.
         //Utiliza template literals (``) para facilitar a construção da string HTML.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.videoUrl}" target="_blank">${dado.titulo}</a>
                    </h2>
                <p class="descricao-meta">${dado.descricao}<br>
                Data de lançamento: ${dado.dataLancamento}<br>
                Diretor: ${dado.diretor}<br>
                Bilheteria: ${dado.bilheteira}<br></p>
                <a href="${dado.linkOndeAssistir}" target="_blank">Onde assistir</a>
            </div>
        `;

        }

    }

    if (!resultados){
      resultados = "<p>Opss não encontrei nada</p>"
         }
      //Atualiza o conteúdo HTML da seção 'resultados-pesquisa'
     //com os resultados gerados.
     
    section.innerHTML = resultados;
}



