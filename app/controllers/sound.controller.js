const { query } = require("express");
const Sound = require("./model");
const { Op } = require("sequelize");
const helper = require("../Common/helpers");

class SoundController{
    async createSound(req, res){
        const sound = req.body;
        //TODO: Move Code to lib functions

        try{
            const newSound = await Sound.create({
                                Name: sound.name,
                                Description: sound.description || "",
                                Text: sound.text || "",
                                Reit: sound.reit || 0,
                                Status: sound.status || 0, // Draft TODO: Rewrite for ENUM...
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

    async getSounds(req, res){

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
                case 'filterfield':{
                    // TODO: Create and Call function for filterfield
                    //filter_fields.where = helper.ParseRequestValue(query[key]);
                    break;
                };
                case 'likefield':{
                    // TODO: Create and Call function for likefield
                    break;
                };
                case 'limit':{
                    // TODO: Create and Call function for limit
                    break;
                };
            }
        });

        Sound.sync({alter: true}).then(() => {
            return Sound.findAll( filter_fields )
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

    async getOneSound(req, res){
        
        Sound.sync({alter: true}).then(() => {
            return Sound.findOne({
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

    async updateSound(req, res){
        
        Sound.sync({alter: true}).then(() => {
            return Sound.update(
                {
                    Name: sound.name,
                    Description: sound.description || "",
                    Text: sound.text || "",
                    Reit: sound.reit || 0,
                    Status: sound.status || 0 // Draft TODO: Rewrite for ENUM...
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
    async deleteSound(req, res){
        
        Sound.sync({alter: true}).then(() => {
            return Sound.destroy({
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

module.exports = new SoundController();