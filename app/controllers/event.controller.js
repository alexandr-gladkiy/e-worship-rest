const { query } = require("express");
const Event = require("./models");
const { Op } = require("sequelize");
const helper = require("../Common/helpers");

class EventController{
    async createEvent(req, res){
        const event = req.body;
        //TODO: Move Code to lib functions

        try{
            const newEvent = await Event.create({
                                Name: event.name,
                                Description: event.description || "",
                                Status: event.status || 0, // Draft TODO: Rewrite for ENUM...
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

    async getEvents(req, res){

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

        Event.sync({alter: true}).then(() => {
            return Event.findAll( filter_fields )
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

    async getOneEvent(req, res){
        
        Event.sync({alter: true}).then(() => {
            return Event.findOne({
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

    async updateEvent(req, res){
        const event = req.body;
        Event.sync({alter: true}).then(() => {
            return Event.update(
                {
                    Name: event.name,
                    Description: event.description || "",
                    Status: event.status || 0 // Draft TODO: Rewrite for ENUM...
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
    async deleteEvent(req, res){
        
        Event.sync({alter: true}).then(() => {
            return Event.destroy({
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

module.exports = new EventController();