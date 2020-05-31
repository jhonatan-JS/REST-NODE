const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os produtos'
    });
});

router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(201).send({
        mensagem: 'Produto criado',
        produtoCriado: produto
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Voce descobril o ID especial', 
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'voce passou um ID'
        });
    }
});

//altera um produto
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando o PATCH dentro da rota de produtos'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando o DELETE dentro da rota de produtos'
    });
});

module.exports = router;