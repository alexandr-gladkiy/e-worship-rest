const { query } = require("express");
const Sound = require("../model/Sound");
const { Op } = require("sequelize");
//const StatusType = require("../model/Types");

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
        //const filterFields = query.filterfield.split(";");
        let filterFields = [];
        let likeFields = [];

        const query_keys = Object.keys(query);
        query_keys.forEach((query_key) => {
            switch(query_key){
                case 'orderby':{
                    // TODO: Create and Call function for OrderBy
                    break;
                }; 
                case 'filterfield':{
                    // TODO: Create and Call function for filterfield
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
            return Sound.findAll()
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