

class RecordController{
    data = {};
    filters = {};
    responseData = {
        status: 0,
        message: {}
    };
    
    async function createRecord(model, data={}){
        this.data = data;

        try{
            model.sync({alter: true});
            const result = await model.create(this.data);
            this.setResponseStatusOk(result.data);
        }catch(error){
            this.setResponseStatusError({
                error: error.message
            });
        }
    }

    async getRecords(model, filters = {}){
        this.filters = filters;

        try{
            model.sync({alter: true});
            const result = await model.findAll(this.filters);
            this.setResponseStatusOk(result.data);
        }catch(error){
            this.setResponseStatusError({
                error: error.message
            });
        }
    }

    async getOneRecord(model, filters){
        this.filters = filters;

        try{
            model.sync({alter: true});
            const result = await model.findAll(this.filters);
            this.setResponseStatusOk(result.data);
        }catch(error){
            this.setResponseStatusError({
                error: error.message
            });
        }
    }

    async updateRecord(model, data={}, filters={}){
        this.filters = filters;
        this.data - data;

        try{
            model.sync({alter: true});
            const result = await model.update(this.data, this.filters);
            this.setResponseStatusOk(result.data);
        }catch(error){
            this.setResponseStatusError({
                error: error.message
            });
        }    
    }

    async deleteRecord(model, filters={}){
        this.filters = filters;
        
        try{
            model.sync({alter: true});
            const result = await model.destroy(this.filters).data;
            this.setResponseStatusOk(result.data);
        }catch(error){
            this.setResponseStatusError({
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

module.exports.RecordController = RecordController;