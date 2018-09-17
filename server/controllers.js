
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

    saveProperties: async(req, res, next) => {
        const db = req.app.get('db');
        let user_id = req.session.user.id
        const {
            
            property_name,
            property_description,
            address,
            city,
            state,
            zip,
            image_url,
            loan_amount,
            monthly_mortgage,
            desired_rent,
            recommended_rent
            
        } = req.body;
        
        db.create_Property([user_id, property_name, property_description, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent, recommended_rent ])
        
        .then(propertyList => res.status(200).send(propertyList)).catch(err => console.log(err))
        
    },

    getProperties: (req, res, next) => {
        const {id} = req.session.user;
        const db = req.app.get('db');
        const newId = id.toString()
        
        db.get_Property([ newId ]).then(dbResult => {
            
            res.status(200).send(dbResult);

            }).catch(err => console.log(err))

        console.log(newId)
    },

    deleteProperties: (req, res, next) => {
        const {id} = req.params

        const db = req.app.get('db');
        db.delete_Property([id]).then(properties => { res.status(200).send(properties);
        
        })
    },

    getFiltered: (req, res, next) => {
        let user_id = req.session.user.id;
        const {id} = req.params
        const newUser_id = user_id.toString()
        console.log(user_id)

        const db = req.app.get('db');
        db.get_Filtered([newUser_id, id]).then(dbResult => { res.status(200).send(dbResult);
        
        })
    }






}