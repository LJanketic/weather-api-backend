const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(morgan('tiny'))

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
    res.send('Hello world!!!')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)res.status(404).send('The course with the given ID was not found!')
    res.send(course)
});


app.listen(3000, () => console.log('Listening on port 3000...'))