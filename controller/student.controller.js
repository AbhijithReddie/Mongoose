const studentModel = require('../models/student.model.js');

async function displayAllData(req, res) {
    try {
        const students = await studentModel.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

async function getStudentData(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findById(id);
        if (!student)
            res.status(404).json({ 'message': "Student with given id not found" });
        else
            res.status(200).json(student);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

async function addStudentData(req, res) {
    try {
        const { _id, name, phone, email } = req.body;
        const student = await studentModel.create({
            _id: _id,
            name,
            phone,
            email
        });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

async function updateStudentData(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!student) {
            res.status(404).json({ "message": "Student with given id not found" });
        } else {
            res.status(200).json(student);
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

async function deleteStudentData(req, res) {
    try {
        const { id } = req.params;
        const student = await studentModel.findByIdAndDelete(id);
        if (!student) {
            res.status(404).json({ "message": "Student with given id not found" });
        } else {
            res.status(200).json({ "message": "Student deleted successfully" });
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { displayAllData, getStudentData, addStudentData, updateStudentData, deleteStudentData };
