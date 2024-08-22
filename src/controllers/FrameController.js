const { Frame } = require('../model.js')


module.exports = {
    // Lists all frames related to a demo. The demoId is passed into the request route query.
    async getFramesByDemoId(req, res) {
        const { demoId } = req.query;

        const frames = await Frame.findAll({ where: { demoId } })

        return res.json(frames)
    },
    // Updates frame HTML according to its id passed into the request route and the HTML body. 
    async update(req, res) {
        const { id } = req.params;
        const html = req.body;

        const frame = await Frame.findByPk(id);

        if (!frame) return res.status(401).send("Frame not found");

        try {
            await Frame.update({ html: html }, { where: { id } });
        } catch (error) {
            console.error('Error updating HTML field:', error);
        }

        return res.json(frame);
    }
}