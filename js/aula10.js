let campoCep = $("#cep");
let campo = $("#campo")

campoCep.blur(function () {
    var cep = $(this).val();g

    if (cep != "") {
        console.log(cep)
        buscaCep(cep)
    } else {
        alert('Digite o CEP seu folgado!')
    }
})

function buscaCep(cep) {
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        beforesend: () => {
            console.log("pesquisando...")
        },
        success: (resposta) => {
            let listacampo = "";
                listacampo += `<div class="box">
                       <h1>${resposta.cep}</h1>
                       <p>${resposta.logradouro}</p>
                       <p>${resposta.complemento}</p>
                       <p>${resposta.bairro}</p>
                       <p>${resposta.localidade}</p>
                       <p>${resposta.uf}</p>
                       <p>${resposta.ibge}</p>
                       <p>${resposta.gia}</p>
                       <p>${resposta.ddd}</p>
                       <p>${resposta.siaf}</p>
                       </div>`
                
                    console.log(resposta)
                    campo.html(listacampo)
                },
                error: () => {
                    console.log("deu ruim")
                }
            })


        }

