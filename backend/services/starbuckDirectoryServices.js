import Starbucks_Directory from "../models/starbuckDirectory.js";
import { Op } from 'sequelize'

export async function getStarbucksArgentina(req, res) {
    try {
        const starbucks = await Starbucks_Directory.findAll({ where: 
            {   COUNTRY: "AR"   }
        });
        res.status(200).json(starbucks);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

export async function getStarbucksInterior(req, res) {
    try {
        const starbucks = await Starbucks_Directory.findAll({ where: 
            {   COUNTRY: "AR",
             PROVINCE: { 
                [Op.notIn]:  ["B", "C"]
                }   
            }
        });
        res.status(200).json(starbucks);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}