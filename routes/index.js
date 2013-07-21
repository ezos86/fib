/*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'fib' });
};

/**
 * Set up routes
 */

var fib = require('./fib');
 
module.exports = function(app, options) {
  app.get('/', index);
  app.get('/fib/:num', fib.getFib );
  
}
