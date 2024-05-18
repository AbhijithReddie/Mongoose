
const express = require('express');
const routes = express.Router(); 
const controllers = require('../controller/student.controller.js');

routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.get('/', controllers.displayAllData);
routes.post('/', controllers.addStudentData);
routes.get('/:id', controllers.getStudentData);
routes.put('/:id', controllers.updateStudentData);
routes.delete('/:id', controllers.deleteStudentData);

module.exports = routes;
