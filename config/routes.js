const express=require('express')
const router=express.Router()
// const notesController=require('../app/controllers/notesController')
const categoriesController=require('../app/controllers/categoriesController')
const { authenticateUser } = require('../app/middlewares/authentication')
const { usersRouter } = require('../app/controllers/UserController')
const eventsController = require('../app/controllers/eventController')

// router.get('/notes',authenticateUser,notesController.list)
// router.get('/notes/:id',authenticateUser, notesController.show)
// router.post('/notes',authenticateUser ,notesController.create)
// router.put('/notes/:id',authenticateUser ,notesController.update)
// router.delete('/notes/:id',authenticateUser ,notesController.destroy)


router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id',  categoriesController.show)
router.put('/categories/:id',  categoriesController.update)
router.delete('/categories/:id', categoriesController.destroy)

router.get('/events',authenticateUser, eventsController.list)
router.post('/events',authenticateUser, eventsController.create)

router.use('/users', usersRouter)

module.exports=router