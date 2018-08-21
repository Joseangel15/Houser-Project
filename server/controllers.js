

module.exports = {



    // login: ( req, res, next ) => {
    //     const { session } = req;
    //     const { username, password } = req.body;

    //     const user = users.find()

    //     if (user) {
    //         session.user.username = user.username;
    //         res.status(200).send(session.user);
    //     }else {
    //         res.status(500).send('Unauthorized.');
    //     }
    // },

    register: (req, res, next) => {

        const {id} = req.params
        const db = req.app.get('db')
        const {

            username,
            password

        } = req.body

        db.register_User([username, password, id]).then(dbResult => {
            res.status(200).send(dbResult)
        })
    }






}