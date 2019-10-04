const BlogModel = require("../database/models/blog_model");


async function create(req, res) {
    //logic for creating a resource
    let { title, content } = req.body;
    let blog = await BlogModel.create({ title, content })
        .catch(err => res.status(500).send(err));
    res.redirect("/blogs");
}

async function index(req, res) {
    //showed a list of all the resources
    let blogs = await BlogModel.find();
    res.render("blog/index", { blogs });
}

function make(req, res) {
    //shows the form to create the resource
    res.render("blog/new");
}

module.exports = {
    create,
    index,
    make
}