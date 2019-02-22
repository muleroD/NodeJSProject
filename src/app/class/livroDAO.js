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

}

module.exports = LivroDAO;