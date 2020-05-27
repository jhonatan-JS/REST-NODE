const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o POST dentro da rota de produtos'
    });
});

router.get('/id_produto', (req, res, next) => {
    const id = req.param.id_produto
    res.status(200).send({
        mensagem: 'Usando o GET de um produto exclusivo'
    });
});

module.exports = router;