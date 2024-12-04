const { query } = require("express");
const MainController = require("./main_controller");
const User = require("../models/user_model");

class UserController extends MainController{
    async createUser(req, res){
        const user = req.body;
        data = this.getDataFromRequestBody(req.body);
        this.createRecord(User, data);
        res.status(this.getStatus()).json(this.getMessage());
    }

    async getUsers(req, res){
        filters = this.getFilterFromQueryString(req.query);
        this.getRecords(User, filters);
        res.status(this.getStatus()).json(this.getMessage());
    }

    async getOneUser(req, res){
        filters = this.getFilterFromQueryString(req.query);
        this.getOneRecord(User, filters);
        res.status(this.getStatus()).json(this.getMessage());
    }

    async updateUser(req, res){
        const user = req.body;
        data = this.getDataFromRequestBody(req.body);
        filter = {where:{Id: req.params.id}}
        this.updateRecords(User, data, filter);
        res.status(this.getStatus()).json(this.getMessage()); 
    }

    async deleteUser(req, res){
        filter = {where:{Id: req.params.id}};
        this.deleteRecords(User, filter);
        res.status(this.getStatus()).json(this.getMessage());
    }

}

UserController.prototype.getDataFromRequestBody = function(body){
    data = {};
        
    for (key in keys(body)){
        switch(key){
            case 'login': data.append('Login', body[key]);
            case 'email': data.append('Email', body[key]);
            case 'phone': data.append('Phone', body[key]);
            case 'firstName': data.append('First_Name', body[key]);
            case 'middleName': data.append('Middle_Name', body[key]);
            case 'lastName': data.append('Last_Name', body[key]);
            case 'status': data.append('Status', body[key]);
        }
    }
}

UserController.prototype.getFilterFromQueryString = function(queryString){
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

}

module.exports = new UserController();