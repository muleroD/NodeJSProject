const app = require("./src/config/configExpress")

app.listen(3000, function () {
    console.log("Server run in port 3000");
    console.log("http://localhost:3000");
});

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