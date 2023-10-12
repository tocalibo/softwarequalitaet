import express from 'express';

const PORT = process.env.PORT || 5500;

let app = express();
app.use(express.static('frontend'));

app.listen(PORT, function () {
    console.log(`App läuft auf Port ${PORT}`);
});