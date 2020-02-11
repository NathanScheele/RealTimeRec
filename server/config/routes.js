const dayHandler = require('../days/dayHandler.js');
const areaHandler = require('../areas/areaHandler.js');

//Add/export api routes
module.exports = function(app, express){
    app.get('/', function(req, res){
        res.redirect('/api/getCrowd');
     }, dayHandler.getCrowd);
    
     app.get('/', function(req, res){
        res.redirect('/api/getAreaCrowds');
     }, areaHandler.getAreaCrowds);
     
     app.put('/', function(req, res){
        res.redirect('/api/updateAreaCrowd');
     }, areaHandler.updateAreaCrowd);

     app.put('/', function(req, res){
        res.redirect('/api/checkOut');
     }, areaHandler.checkOut);
    
    // app.get('/api/getCrowd', dayHandler.getCrowd);
    // app.get('/api/getAreaCrowds', areaHandler.getAreaCrowds);
    // app.put('/api/updateAreaCrowd', areaHandler.updateAreaCrowd);
    // app.put('/api/checkOut', areaHandler.checkOut);
};