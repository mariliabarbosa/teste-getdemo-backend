const { Demo } = require('../model.js')


module.exports = {
    // Finds all demos registered into the database.
    async index(req, res) {
        const demos = await Demo.findAll();

        res.json(demos);
    }
}   