
class MainController{
    data = {};
    filters = {};
    responseData = {
        status: 0,
        message: {}
    };
    
    async createRecord(model, data={}){
        this.data = data;

        try{
            model.sync({alter: true});
            const newRecord = await model.create(this.data);
            this.setResponseStatusOk(newRecord.data);
        }catch(error){
            this.setResponseStatusError({
                status: false,
                error: error.message
            });
        }
    }

    async getRecords(model, filters = {}){
        this.filters = filters;

        try{
            model.sync({alter: true});
            responseMessage = model.findAll(this.filters).data;
            this.setResponseStatusOk(responseMessage);
        }catch(error){
            this.setResponseStatusError({
                status: false,
                error: error.message
            });
        }
    }

    async getOneRecord(model, filters){
        this.filters = filters;

        try{
            model.sync({alter: true});
            responseMessage = model.findAll(this.filters).data;
            this.setResponseStatusOk(responseMessage);
        }catch(error){
            this.setResponseStatusError({
                status: false,
                error: error.message
            });
        }
    }

    async updateRecords(model, data={}, filters={}){
        this.filters = filters;
        this.data - data;

        try{
            model.sync({alter: true});
            responseMessage = model.update(this.data, this.filters).data;
            this.setResponseStatusOk(responseMessage);
        }catch(error){
            this.setResponseStatusError({
                status: false,
                error: error.message
            });
        }    
    }

    async deleteRecords(model, filters={}){
        this.filters = filters;
        
        try{
            model.sync({alter: true});
            responseMessage = model.destroy(this.filters).data;
            this.setResponseStatusOk(responseMessage);
        }catch(error){
            this.setResponseStatusError({
                status: false,
                error: error.message
            });
        }
    }

    async getStatus(){
        return this.responseData.status;
    }

    async getMessage(){
        return this.responseData.message;
    }

    async setResponseStatusOk(responseMessage){
        this.responseData.status = 200;
        this.responseData.message = responseMessage;
    }

    async setResponseStatusError(responseMessage){
        this.responseData.status = 404;
        this.responseData.message = responseMessage;
    }

}

module.exports = new MainController();