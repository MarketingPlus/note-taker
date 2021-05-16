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

    app.post('/api/notes', function (req, res) {
        fs.readFile('db/db.json', 'utf8', (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);

            let newNote = req.body;
            let uniqueId = (notes.length).toString();
            newNote.id = uniqueId;
            console.log(newNote);
            notes.push(newNote);

            fs.writeFileSync('db/db.json', JSON.stringify(notes), 'utf8', (err, data) => {
                if (err) throw err;
                console.log('Added a new note!');
            });

            res.json(notes);
        });
    });


}