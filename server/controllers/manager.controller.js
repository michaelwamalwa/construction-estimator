const ManagerModel = require('../models/manager.model.js');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class ManagerController {
    getAllManagers = async (req, res, next) => {
        let managerList = await ManagerModel.find();
        if (!managerList.length) {
            throw new HttpException(404, 'Users not found');
        }

        managerList = managerList.map(manager => {
            const { password, ...managerWithoutPassword } = manager;
            return managerWithoutPassword;
        });

        res.send(managerList);
    };

    getManagerById = async (req, res, next) => {
        const manager = await ManagerModel.findOne({ id: req.params.id });
        if (!manager) {
            throw new HttpException(404, 'User not found');
        }

        const { password, ...managerWithoutPassword } = manager;

        res.send(managerWithoutPassword);
    };

    getManagerByuserName = async (req, res, next) => {
        const manager = await ManagerModel.findOne({ username: req.params.username });
        if (!manager) {
            throw new HttpException(404, 'Manager not found');
        }

        const { password, ...managerWithoutPassword } = manager;

        res.send(managerWithoutPassword);
    };

    getCurrentManager = async (req, res, next) => {
        const { password, ...managerWithoutPassword } = req.getCurrentManager;

        res.send(managerWithoutPassword);
    };

    createManager = async (req, res, next) => {
        this.checkValidation(req);

        await this.hashPassword(req);

        const result = await ManagerModel.create(req.body);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Manager was created!');
    };

    updateManager = async (req, res, next) => {
        this.checkValidation(req);

        await this.hashPassword(req);

        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ManagerModel.update(restOfUpdates, req.params.id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'User not found' :
            affectedRows && changedRows ? 'User updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteManager = async (req, res, next) => {
        const result = await ManagerModel.delete(req.params.id);
        if (!result) {
            throw new HttpException(404, 'User not found');
        }
        res.send('User has been deleted');
    };

    managerLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { email, password: pass } = req.body;

        const manager = await ManagerModel.findOne({ email });

        if (!manager) {
            throw new HttpException(401, 'Unable to login!');
        }

        const isMatch = await bcrypt.compare(pass, manager.password);

        if (!isMatch) {
            throw new HttpException(401, 'Incorrect password!');
        }

        // user matched!
        const secretKey = process.env.SECRET_JWT || "";
        const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
            expiresIn: '24h'
        });

        const { password, ...managerWithoutPassword } = user;

        res.send({ ...managerWithoutPassword, token });
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    // hash password if it exists
    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new ManagerController;