const { query } = require("express");
const { RecordController } = require("./record_controller");
const UserModel = require("../models/user_model");

class UserController{
    

    async create(req, res){
        data = getDataFromRequestBody(req.body);
        const record = new RecordController();
        record.create(UserModel, data);
        res.status(this.record.getStatus()).json(this.record.getMessage());
    }

    async getList(req, res){
        //res.status(200).json(UserModel.findAll({}).data);
        
        let filters = this.getFilterFromQueryString(req.query);
        this.record.getList(UserModel, filters);
        res.status(this.record.getStatus()).json(this.record.getMessage());
    }

    async getOne(req, res){
        filters = this.getFilterFromQueryString(req.query);
        this.record.getOne(UserModel, filters);
        res.status(this.record.getStatus()).json(this.record.getMessage());
    }

    async update(req, res){
        const user = req.body;
        data = this.getDataFromRequestBody(req.body);
        filter = {where:{Id: req.params.id}}
        this.record.update(UserModel, data, filter);
        res.status(this.record.getStatus()).json(this.record.getMessage()); 
    }

    async delete(req, res){
        filter = {where:{Id: req.params.id}};
        this.record.delete(UserModel, filter);
        res.status(this.record.getStatus()).json(this.record.getMessage());
    }

}

function getDataFromRequestBody(body={}){
    data = {};
    Object.keys(body).forEach((key)=>{
        switch(key){
            case 'login': data['Login'] = body[key];
            case 'email': data['Email'] = body[key];
            case 'phone': data['Phone'] = body[key];
            case 'firstName': data['First_Name'] = body[key];
            case 'middleName': data['Middle_Name'] = body[key];
            case 'lastName': data['Last_Name'] = body[key];
            case 'status': data['Status'] = body[key];
        }
    });
    return data;
}

function getFilterFromQueryString(queryString = {}){
    const filter_fields = {
        where:{},
    };

    const query_keys = Object.keys(queryString);
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
    return filter_fields;
}

module.exports = new UserController();