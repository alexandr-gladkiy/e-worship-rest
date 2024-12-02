const { query } = require("express");
const SoundList = require("./models");
const { Op } = require("sequelize");
const helper = require("../Common/helpers");

class SoundController{
    async createSoundList(req, res){
        const soundList = req.body;
        //TODO: Move Code to lib functions

        try{
            const newSoundList = await SoundList.create({
                                Name: soundList.name,
                                Description: soundList.description || "",
                                Status: soundList.status || 0, // Draft TODO: Rewrite for ENUM...
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

    async getSoundLists(req, res){

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

        SoundList.sync({alter: true}).then(() => {
            return SoundList.findAll( filter_fields )
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

    async getOneSoundList(req, res){
        
        SoundList.sync({alter: true}).then(() => {
            return SoundList.findOne({
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

    async updateSoundList(req, res){
        const soundList = req.body;
        SoundList.sync({alter: true}).then(() => {
            return SoundList.update(
                {
                    Name: soundList.name,
                    Description: soundList.description || "",
                    Status: soundList.status || 0 // Draft TODO: Rewrite for ENUM...
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
    async deleteSoundList(req, res){
        
        SoundList.sync({alter: true}).then(() => {
            return SoundList.destroy({
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