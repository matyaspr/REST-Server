const response = require('express');


const UserGet = (req, res = response) => {

    const query = req.query;
    const { q, limit, page} = req.query;

    res.json({
        msg: 'get',
        q,
        limit, 
        page
    });
}



const UserPost = (req, res = response) => {
    const {nombre, apellido} = req.body;
    
    res.json({
        msg: 'post',
        nombre, 
        apellido
    });
}



const UserPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put',
        id
    });
}

const UserDelete = (req, res = response) => {
    res.json({
        msg: 'delete',
    });
}


module.exports = {
    UserGet,
    UserPost,
    UserPut,
    UserDelete
}


