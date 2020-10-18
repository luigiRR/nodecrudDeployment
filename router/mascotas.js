const express = require ('express');
const Mascota = require('../models/mascota');
const router = express.Router();

//const Mascotaa = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        
        const arraymascotasDB = await Mascota.find()
        console.log(arraymascotasDB)

        res.render("mascotas", {
            arraymascotas: arraymascotasDB
        })

    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;