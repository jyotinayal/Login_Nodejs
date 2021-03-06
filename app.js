const express = require('express');
const path = require('path');
const routes = require('./routes/routes')
const app = express();
app.set('views',path.join(__dirname+'/views'));
app.set('view engine','pug');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname+'public')));
app.use('/', routes);
app.listen(9999,() => {
	console.log('Server up at 9999')
});
