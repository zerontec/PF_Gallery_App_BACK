const { Op } = require("sequelize");
const { Gallery, User } = require("../db");
const axios = require("axios");


async function postGallery(req, res, next) {
    const { name, address, owner, phone, email, website, description, bank_acc_num, logo } = req.body;
    const gallery = await Gallery.findOne({
        where: {
            name: name
        }
    })
    try {
        if (gallery) {
            res.status(400).json({
                message: "Gallery already exists"
            })
        } else {
            const infoGallery = await Gallery.create({
                id: 1,
                name,
                address,
                owner,
                phone,
                email,
                website,
                description,
                bank_acc_num,
                logo
            })
            res.status(200).json({
                message: "Gallery created successfully",
                gallery: infoGallery
            })
        }
    } catch (error) {
        return (error);
    }
};

// {
// "name": "Museum of Modern Art",
// "address": "1 E 53rd St, New York, NY 10022",
// "owner": "Museum of Modern Art",
// "phone": "212-929-9200",
// "email": "museo@gmail.com",
// "website": "https://www.moma.org/",
// "description": "The Museum of Modern Art (MOMA) is ...",
// "bank_acc_num": "123456789",
// "logo": "logo.png"
// }


async function getGallery(req, res, next) {
    try {
        const { id } = req.params;
        const gallery = await Gallery.findOne({
            where: {
                id
            }
        })
        if (!gallery) {
            res.status(404).json({
                message: "Gallery not found"
            })
        } else {
            res.status(200).json({
                message: "Gallery found",
                gallery
            })
        }
    } catch (error) {
        next(error);
    }
};

async function putGallery(req, res, next) {
    try {
        const { name, address, owner, phone, email, website, description, bank_acc_num, logo } = req.body;
        const gallery = await Gallery.findOne({
            where: {
                id: 1,
            }
        })
        if (!gallery) {
            res.status(404).json({
                message: "Gallery not found"
            })
        } else {
            await Gallery.update({
                name,
                address,
                owner,
                phone,
                email,
                website,
                description,
                bank_acc_num,
                logo
            }, {
                where: {
                    id: 1
                }
            })
            res.status(200).json({
                message: "Gallery updated successfully",
                gallery
            })
        }
    } catch (error) {
        next(error);
    }
};



module.exports = {
    postGallery,
    getGallery,
    putGallery
};
