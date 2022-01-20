const { Op } = require("sequelize");
const { Gallery, User, Artwork } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");


async function postGallery(req, res, next) {
    const { name, id, address, owner, phone, email, website, description, bank_acc_num, logo } = req.body;

    try {
        const infoGallery = await Gallery.create({
            name,
            id,
            address,
            owner,
            phone,
            email,
            website,
            description,
            bank_acc_num,
            logo
        })
        await User.update({
            gallery_id: infoGallery.id
        }, {
            where: {
                id: req.user.id
            }
        })
        res.status(200).json({
            message: "Gallery created successfully",
            gallery: infoGallery
        })

    } catch (error) {
        next(error);
    }
};


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
        const { id } = req.params;
        const { name, address, owner, phone, email, website, description, bank_acc_num, logo } = req.body;
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
                    id
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
