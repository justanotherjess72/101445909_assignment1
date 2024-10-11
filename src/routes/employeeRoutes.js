const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Get all employees
router.get('/employees', employeeController.getAllEmployees);

// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Get employee by ID
router.get('/employees/:eid', employeeController.getEmployeeById);

// Update employee details
router.put('/employees/:eid', employeeController.updateEmployee);

// Delete an employee
router.delete('/employees/:eid', employeeController.deleteEmployee);

module.exports = router;
