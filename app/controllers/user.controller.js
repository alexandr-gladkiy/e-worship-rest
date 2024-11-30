const { query } = require("express");
const User = require("./models");
const { Op } = require("sequelize");
const helper = require("../Common/helpers");

class UserController{
    async createUser(req, res){
        const user = req.body;
        //TODO: Move Code to lib functions

        try{
            const newUser = await User.create({
                                Login: user.name,
                                Email: user.email,
                                Phone: user.phone,
                                First_Name: user.firstName || "",
                                Middle_Name: user.middleName || "",
                                Last_Name: user.lastName || "",
                                Status: user.status || 0, // Draft TODO: Rewrite for ENUM...
                            })
             res.status(200).json({
                 status: true
             });
         }catch(error){
            res.status(404).json({
                status: false,
                error: error.message 
            });
        }

    }

    async getUser(req, res){

        const query = req.query;
        
        //TODO: Validate existing keys in query, forming filters and order by
        const filter_fields = {
            where:{},
        };
        
        const query_keys = Object.keys(query);
        query_keys.forEach((key) => {
            switch(key){
                case 'orderby':{
                    // TODO: Create and Call function for OrderBy
                    break;
                }; 
                case 'filter':{
                    // TODO: Create and Call function for filter field
                    //filter_fields.where = helper.ParseRequestValue(query[key]);
                    break;
                };
                case 'like':{
                    // TODO: Create and Call function for like field
                    break;
                };
                case 'limit':{
                    // TODO: Create and Call function for limit
                    break;
                };
            }
        });

        User.sync({alter: true}).then(() => {
            return User.findAll( filter_fields )
        }).then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(404).json({
                status: false,
                error: error.message
            })
        }) 

    }

    async getOneUser(req, res){
        
        User.sync({alter: true}).then(() => {
            return User.findOne({
                where:{Id: req.params.id}
            })
        }).then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(404).json({
                status: false,
                error: error.message
            })
        }) 
    }

    async updateUser(req, res){
        
        User.sync({alter: true}).then(() => {
            return User.update(
                {
                    Login: user.name,
                    Email: user.email,
                    Phone: user.phone,
                    First_Name: user.firstName || "",
                    Middle_Name: user.middleName || "",
                    Last_Name: user.lastName || "",
                    Status: user.status || 0, // Draft TODO: Rewrite for ENUM...
                },
                {
                    where:{Id: req.params.id}
                }
            )
        }).then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(404).json({
                status: false,
                error: error.message
            })
        }) 
    }
    async deleteUser(req, res){
        
        User.sync({alter: true}).then(() => {
            return User.destroy({
                where:{Id: req.params.id}
            })
        }).then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(404).json({
                status: false,
                error: error.message
            })
        }) 
    }

}

module.exports = new UserController();