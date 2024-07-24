
const { blogCategories, blogPosts } = require('../models/blog.model');

module.exports.blogCategories ={
    list: async (req, res) => {
        const data = await BlogCategory.find();
        res.status(200).send(({
            error: false,
            data:data
        }))
},

    create: async (req, res) => {
        const data = await BlogCategory.create(req.body);
        res.status(201).send({
            error: false,
            data: data
        })
    },

    update: async (req, res) => {
        const data = await BlogCategory.findByIdAndUpdate(req.params.id , req.body );
        res.status(200).send({
            error: false,
            data: data
        })  
    },

    read: async (req, res) => {
        const data = await BlogCategory.findById(req.params.id);
        res.status(200).send({
            error: false,
            data: data
        })
    },

    delete: async (req, res) => {
        const data = await BlogCategory.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            data: data
        })
    }   

}


module.exports.blogPosts ={
    list: async (req, res) => {
        const data = await BlogPost.find();
        res.status(200).send(({
            error: false,
            data:data
        }))
},

    create: async (req, res) => {
        const data = await BlogPost.create(req.body);
        res.status(201).send({
            error: false,
            data: data
        })
    },

    update: async (req, res) => {
        const data = await BlogPost.findByIdAndUpdate(req.params.id , req.body );
        res.status(200).send({
            error: false,
            data: data
        })  
    },

    read: async (req, res) => {
        const data = await BlogPost.findById(req.params.id);
        res.status(200).send({
            error: false,
            data: data
        })
    },

    delete: async (req, res) => {
        const data = await BlogPost.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            data: data
        })
    }   

}