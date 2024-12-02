const { query } = require("express");
const UserGroup = require("../models/userGroup_model");
const { Op } = require("sequelize");
//const helper = require("../Common/helpers");

class UserGroupController{
    async createUserGroup(req, res){
        const userGroup = req.body;
        //TODO: Move Code to lib functions

        try{
            const newUserGroup = await UserGroup.create({
                                Name: userGroup.name,
                                Description: userGroup.description || "",
                                Status: userGroup.status || 0, // Draft TODO: Rewrite for ENUM...
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

    async getUserGroups(req, res){

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

        UserGroup.sync({alter: true}).then(() => {
            return UserGroup.findAll( filter_fields )
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

    async getOneUserGroup(req, res){
        
        UserGroup.sync({alter: true}).then(() => {
            return UserGroup.findOne({
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

    async updateUserGroup(req, res){
        const userGroup = req.body;
        UserGroup.sync({alter: true}).then(() => {
            return SoundList.update(
                {
                    Name: userGroup.name,
                    Description: userGroup.description || "",
                    Status: userGroup.status || 0 // Draft TODO: Rewrite for ENUM...
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
    async deleteUserGroup(req, res){
        
        UserGroup.sync({alter: true}).then(() => {
            return UserGroup.destroy({
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

module.exports = new UserGroupController();