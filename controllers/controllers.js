const bcrypt = require('bcryptjs');
var userData = require('../models/user');

class Controllers {
    async login(req,res,next){
        const { username, password } = req.body;
        const user = await userData.findOne({ username }).lean()
    
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }
    
        if (await bcrypt.compare(password, user.password)) {
            // the username, password combination is successful
            return res.json({ status: 'ok'})
    
        }
        res.json({ status: 'error', error: 'Invalid username/password' })
    }
}

module.exports = new Controllers();