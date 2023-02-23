
const { request } = require('express');
const express = require('express');

const app = express();
const PORT = 5001;

// const  {songListArray}  = require('./modules/songs.js')
// const  {albumListArray} = require('./modules/albums.js')
// const  {artistListArray} = require('./modules/artist.js')
// app.use( {songListArray} )
// app.use( {albumListArray} )
// app.use({artistListArray})

const albumListArray = [
    {
        album: 'Night Whispers',
        year: '1938',
    },
    {
        album: 'Stomping At The Savoy',
        year: '2006'
    },
    {
        album: 'Mingus Ah Um',
        year: '1959'
    },
];

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];



app.use(express.json())
app.use(express.static('server/public'));
// app.use(express.static('server/modules'))
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.get('/song', (req,res) => {
    console.log('Get Request for /song')
    res.send(songListArray)
})

// TODO - Add GET for songs

app.post('/song', (req,res)=> {
    console.log('Get Post for /song')
    console.log('req.body',req.body)
    let songToAdd = req.body
    songListArray.push(songToAdd)
    res.sendStatus(201)
})



app.get('/album', (req,res)=> {
    console.log('Request for Album')
    res.send(albumListArray)
})

app.post('/album',(req,res) => {
    let albumToAdd = req.body
    albumListArray.push(albumToAdd)
    res.sendStatus(201)
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});