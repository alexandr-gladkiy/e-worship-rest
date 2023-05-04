const { query } = require("express");
const Test = require("../Model/Tag");

class Tag 
{
    async createTag(req, res){
        const tag = req.body;
        //TODO: Move Code to lib functions

        try{
            const newTag = await Tag.create({
                                Name: Tag.name,
                                Status: Tag.status || 0, // Draft TODO: Rewrite for ENUM...
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

    async getTags(req, res){
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

        Tag.sync({alter: true}).then(() => {
            return Tag.findAll()
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

    async getOneTag(req, res){
        
        Tag.sync({alter: true}).then(() => {
            return Tag.findOne({
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

    async updateTag(req, res){
        
        Tag.sync({alter: true}).then(() => {
            return Tag.update(
                {
                    Name: tag.name,
                    Status: tag.status || 0 // Draft TODO: Rewrite for ENUM...
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

    async deleteTag(req, res){
        
        Sound.sync({alter: true}).then(() => {
            return Tag.destroy({
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