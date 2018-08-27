
module.exports = {



    login: ( req, res, next ) => {
        const db = req.app.get('db');
        let {session} = req;
        let {
            
            username, 
            password
        
        } = req.body;
              

        db.user_Login([ username ]).then( ResUser => {
        
            if(ResUser[0]){
                
                if ( ResUser[0].password == password ) {
                    session.user.id = ResUser[0].id;
                    res.status(200).send(session.user);
                }else if( ResUser[0].password !== password ){
                    res.status(401).send('Unauthorized.');
                }
                
            } else {
                res.status(401).send('Unauthorized.');
            }
            console.log(session)
        })

    },


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

    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send(req.session)

    },

    saveProperties: (req, res, next) => {

    }






}