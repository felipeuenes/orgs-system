import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/Tomate.png'
import brócolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {

    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: 'Cesta de verduras',
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com alimentos selecionados cuidadosamentes com alimentos para cozinha",
        preco: 'R$ 40,00',
        botao: 'Comprar',
    },
    itens: {
        titulo: 'Itens da cesta',
        lista: [
            {
                nome: 'Tomate',
                image: tomate
            },
            {
                nome: 'Brócolis',
                image: brócolis,
            },
            {
                nome: 'Batata',
                image: batata
            },
            {
                nome: 'Pepino',
                image: pepino
            },
            {
                nome: 'Abóbora',
                image: abobora
            }
        ]
    }

}


export default cesta;