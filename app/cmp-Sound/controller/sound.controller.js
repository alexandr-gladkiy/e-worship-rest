const db = require("../../db");

class SoundController{
    async createSound(req, res){
        const sound = req.body;

        //TODO: Validate sound fields
        const query = `INSERT INTO "Sound" ("name", "reit", "blocked") VALUES ('${sound.name || ""}', ${sound.reit || 0}, ${sound.blocked || false}) RETURNING *`;

        const newSound = await db.query(query);
        res.json(newSound.rows);
    }

    async getSounds(req, res){
        const query = `SELECT * FROM "Sound"`; 
        
        const AllSounds = await db.query(query);
        res.json(AllSounds.rows);
    }

    async getOneSound(req, res){
        const id = req.params.id;
        const query = `SELECT * FROM "Sound" WHERE id=${id}`; 
        
        const Sound = await db.query(query);
        res.json(Sound.rows);
    }
    async updateSound(req, res){
        // res.json( Sound.UpdateSound(req.params.id, req.body) );
    }
    async deleteSound(req, res){
        // res.json( Sound.DeleteSound(req.params.id) ); 
    }

}

module.exports = new SoundController();