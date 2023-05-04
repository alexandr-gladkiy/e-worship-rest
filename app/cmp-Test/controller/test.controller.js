const { query } = require("express");
const Test = require("../Model/Test");

class TestController {
    async createTest(req, res){
        const body = req.body;
        
        const newTest = await Test.create({
                            name: body.name
                        });
        res.json(newTest);
    }

}

module.exports = new TestController()