const express = require('express');
const router = express.Router();


const { registerUser, viewUser, deleteUser, updateUser, loginUser } = require('../controllers/AuthController');

const { verifyToken, checkAdmin } = require('../middleware/Auth');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/viewuser', verifyToken, viewUser);
router.delete('/deleteuser', verifyToken, checkAdmin, deleteUser);
router.put('/updateuser', verifyToken, checkAdmin, updateUser);

module.exports = router;
