//require express -->gives us a function
const express = require('express');

//create an instance of express by calling the function returned above
//--gives us an object
const app = express();
const PORT = 5000;

//express static file serving - public is the folder name
app.use(express.static('server/public'));

//start uo our server
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});