const books = require('./models').books;

//select * from users;
exports.findAllBooks = (req, resp) => {
    //db.collection.find({where},{restriction})
    //1. step1 call the model
    //2. call the findall method may or may not take restriction
    books.findAll()
        .then(data => {
            resp.send(data)
        })
        .catch(err => {
            resp.status(500).send({ message: "500 server error" });
        })
};

//select * from users where firstName='John';
exports.findByBookName = (req, resp) => {
    const bookName = req.params.bookName;
    books.findAll({ where: { "bookName": "abcd" } })
        .then(data => {
            console.log(data);
            resp.send(data);
        }).catch(err => {
            resp.status(500).send({ message: "500 server error" });
        });
};
//select * from users where id=1;
exports.findByPK = (req, resp) => {
    // express.json() express.urlencoded()->body.id
    const id = req.params.id;
    books.findByPk(id)
        .then(data => {
            resp.send(data)
        })
        .catch(err => {
            resp.status(500).send({ message: "500 server error" });
        });
};