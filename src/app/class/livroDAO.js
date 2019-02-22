class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    listar() {
        return new Promise((success, failed) => {
            this._db.all(
                "SELECT * FROM livros",
                (err, result) => {
                    if (err)
                        return failed('Problemas ao listar os livros ');

                    return success(result);
                }
            )
        });
    }

    cadastrar(livro) {
        return new Promise((success, failed) => {
            this._db.run(
                "INSERT INTO livros (titulo,preco,descricao) values (?, ?, ?)",
                [livro.titulo, livro.preco, livro.descricao],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    success();
                })
        })
    };

} module.exports = LivroDAO;