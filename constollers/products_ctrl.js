module.exports = {

    create(req,res){
        const db = req.app.get('db');
        const {name, description, price, imageurl} = req.body;
        db.create_product([name, description, price, imageurl])
            .then(() => res.status(200).json())
            .catch(console.log)
    },
    getOne(req,res){
        const db = req.app.get('db');
        const {params} = req;
        db.read_product([params.id])
            .then(product => res.status(200).json(product))
            .catch(console.log);
    },

    getAll(req,res){
        const db = req.app.get('db');
        db.read_products()
            .then(products => res.status(200).json(products))
            .catch(console.log)
    },
    
    update(req,res){
        const db = req.app.get('db');
        const {params, query} = req;
        db.update_product([query.desc, params.id])
            .then(() => res.status(200).json())
            .catch(console.log);
    },
    delete(req,res){
        const db = req.app.get('db');
        const {params} = req;
        db.delete_product(params.id)
            .then(() => res.status(200).json())
            .catch(console.log);
    }
}