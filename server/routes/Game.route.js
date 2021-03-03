const GameController = require('../controllers/Game.controller');

module.exports = (app) => {
app.get('/api/games', GameController.getAll);
app.post('/api/games', GameController.create);
app.get('/api/games/:id/', GameController.getOne);
app.put('/api/games/:id', GameController.update);
app.delete('/api/games/:id', GameController.delete);
}