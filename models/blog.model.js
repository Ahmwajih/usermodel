const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim : true
    }
},{
    timestamps: true,
    collection: 'blogCategories'
});


const blogPostSchema = new mongoose.Schema({
    blogCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogCategories',
        required: true,
        validate: {
            validator: async function(value) {
                const blogCategory = await mongoose.model('blogCategories').findById(value);
                if (!blogCategory) {
                    return false;
                }
            },
            message: 'Blog Category does not exist'
        }
    },

    title: {
        type: String,
        required: true,
        trim : true
    },

    content : {
        type: String,
        required: true,
        trim : true
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    collection: 'blogPosts'
});

module.exports = {
    BlogCategory: mongoose.model('blogCategories', blogCategorySchema),
    BlogPost: mongoose.model('blogPosts', blogPostSchema)
}