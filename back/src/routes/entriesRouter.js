import express from 'express';
import authAdmin from '../middlewares/authAdmin.js';
import authUser from '../middlewares/authUser.js';

import {
    listEventsController,
    listEventDetailsController,
    validateEventParticipationController,
    eventRegistrationController,
    createEventAdminController,
    listEventCategoriesController,
    eventUnlistController,
    technologyListController,
<<<<<<< Updated upstream
    listEventResultsController,
    insertEventResultsController
=======
    updateEventAdminController,
>>>>>>> Stashed changes
} from '../controllers/entries/index.js';

const router = express.Router();

// Validaciones Joi hasta event/tematicas
router
    .get('/event/search', listEventsController)
    .get('/event/details/:eventID', listEventDetailsController)
    .post('/event', authAdmin, createEventAdminController)
    .post('/event/register', authUser, eventRegistrationController)
    .delete('/event/unlist', authUser, eventUnlistController)
    .get('/event/confirm/:eventCode', validateEventParticipationController)
    .get('/event/categories', listEventCategoriesController)
    .get('/event/technologies', technologyListController)
<<<<<<< Updated upstream
    .get("/event/results", listEventResultsController)
    .post("/event/insert-results", authAdmin, insertEventResultsController);
=======
    .put("/events/:id", authAdmin, updateEventAdminController);
>>>>>>> Stashed changes

export default router;
