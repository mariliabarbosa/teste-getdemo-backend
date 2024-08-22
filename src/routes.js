const { Router } = require('express');
const bodyParser = require('body-parser');
const DemoController = require('./controllers/DemoController')
const FrameController = require('./controllers/FrameController');

const router = Router();

// Finds all demos registered into the database.
router.get('/demos', DemoController.index);

// Updates frame HTML according to its id passed into the request route and the HTML body. 
router.put('/frames/:id', bodyParser.text(), FrameController.update);

// Lists all frames related to a demo. The demoId is passed into the request route query.
router.get('/frames', FrameController.getFramesByDemoId);

module.exports = router;