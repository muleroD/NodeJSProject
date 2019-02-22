module.exports = (app) => {

    app.get("/", (req, res) => {
        res.send(`
        <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body> 
        </html>`
        );
    });

    app.get("/Livros", (req, res) => {
        res.send(`
        <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Listagem de Livros </h1>
        </body> 
        </html>`
        );
    });

};