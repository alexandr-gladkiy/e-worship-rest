class SoundController{
    async createSound(req, res){
        const sound = req.body;
        // const newSound = await db.query("INSERT INTO sound (name, rait, blocked) VALUES ($1, $2, $3)", 
        //                                 [sound.name, sound.rait, sound.blocked]);
        res.json(sound);
    }
    async getSounds(req, res){
        // res.json("ok")
    }
    async getOneSound(req, res){

    }
    async updateSound(req, res){

    }
    async deleteSound(req, res){

    }

}

module.exports = new SoundController();