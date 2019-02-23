const LivroDAO = require("../class/livroDAO")
const db = require("../../config/database")

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.marko(require("../views/livros/index.marko"))
    });

    app.get("/livros", (req, res) => {
        const livroDAO = new LivroDAO(db);

        livroDAO.select()
            .then(livros =>
                res.marko(
                    require("../views/livros/lista/lista.marko"),
                    { livros }))
            .catch(error => console.log(error));
    });

    app.post("/livros", function (req, res) {
        const livroDAO = new LivroDAO(db);

        livroDAO.insert(req.body)
            .then(res.redirect("/livros"))
            .catch(error => console.log(error));
    });

    app.get("/livros/form", function (req, res) {
        res.marko(require("../views/livros/forms/form.marko"), { livro: {} })
    });

    app.get("/livros/form/:id", function (req, res) {
        const id = req.params.id;
        const livroDAO = new LivroDAO(db);

        livroDAO.selectById(id)
            .then(livro => {
                res.marko(require("../views/livros/forms/form.marko"), { livro })
            })
            .catch(err => console.log(err));
    });

    app.delete("/livros/:id", function (req, res) {
        const id = req.params.id;
        const livroDAO = new LivroDAO(db);
        livroDAO.delete(id)
            .then(() => {
                res.status(200).end();
            })
            .catch((err) => {
                console.log(err);
            })
    });



};