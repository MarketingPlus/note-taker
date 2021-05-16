const fs = require('fs');

module.exports = function (app) {
    
    app.get('/api/notes', function (req, res) {
        console.log('Getting Notes');
        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });
}