const { User, Shopping_cart } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");

async function getUsers(req, res, next) {
    try {
        console.log('estamos en el getUsers');
    } catch (error) {
        next(error);
    }
};


async function postUser(req, res, next) {
    try {
        console.log('estamos en el postUser');
    } catch (error) {
        next(error);
    }
};

async function getUserById(req, res, next) {
    try {
        console.log('estamos en el getUserById');
    } catch (error) {
        next(error);
    }
};

async function getUserByName(req, res, next) {
    try {
        console.log('estamos en el getUserByName');
    } catch (error) {
        next(error);
    }
};

async function putUser(req, res, next) {
    try {
        console.log('estamos en el pullUser');
    } catch (error) {
        next(error);
    }
};

async function deleteUser(req, res, next) {
    try {
        console.log('estamos en el deleteUser');
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getUsers,
    postUser,
    getUserById,
    getUserByName,
    putUser,
    deleteUser
};



// users
// POST
// GET
// PULL
// DELETE
// un usuario un carrito
// muchos carritos muchas obras de arte
