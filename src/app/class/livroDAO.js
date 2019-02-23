class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    select() {
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

    selectById(id) {
        return new Promise((success, failed) => {
            this._db.get(
                "SELECT * FROM livros WHERE id = ?",
                [id],
                function (err) {

                    if (err) {
                        console.log(err);
                        return failed("Não foi possivel encontrar o livro ")
                    }

                    return success();
                }
            )
        });
    }

    insert(livro) {
        return new Promise((success, failed) => {
            this._db.run(
                "INSERT INTO livros (titulo, preco, descricao) values (?, ?, ?)",
                [livro.titulo, livro.preco, livro.descricao],
                function (err) {

                    if (err) {
                        console.log(err);
                        return failed('Não foi possível adicionar o livro!');
                    }

                    return success();
                })
        })
    };

    update(livro) {
        return new Promise((success, failed) => {
            this._db.run(
                "UPDATE livros SET titulo = ?, preco = ?, descricao = ? WHERE id = ?",
                [livro.titulo, livro.preco, livro.descricao],
                function (err) {

                    if (err) {
                        console.log(err);
                        return failed("Não foi possivel atualizar o livro");
                    }

                    return success();
                }
            )

        })
    }

    delete(id) {
        return new Promise((success, failed) => {
            this._db.get(
                "DELETE FROM livros WHERE id = ?",
                [id],
                function (err) {
                    if (err) {
                        console.log(err);
                        return failed("Não foi possivel remover o livro")
                    }
                    return success();
                }
            )
        })
    }



} module.exports = LivroDAO;