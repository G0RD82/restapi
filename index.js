const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
       payload:{
           id
       }
    });
});

app.get('/article/:language/:title', (req, res) => {
    const { language, title } = req.params;
    res.status(200).send({
       payload:{
           language,
           title
       }
    });
});

app.get('/comment/:article', (req, res) => {
    const { article } = req.params;
    res.status(200).send({
       payload:{
        article
       }
    });
});

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    res.status(201).send({
       
        payload:{
            name,
            age
        }
    });
});

app.post('/article', (req, res) => {
    const { title, category } = req.body;
    res.status(201).send({
      
        payload:{
            title,
            category
        }
    });
});

app.post('/category', (req, res) => {
    const { name } = req.body;
    res.status(201).send({
       
        payload:{
            name
        }
    });
});

app.put('/user', (req, res) => {
    const { name, age } = req.body;
    res.status(200).send({
      
        payload:{
            name,
            age
        }
    });
});

app.patch('/user', (req, res) => {
    const { id,name } = req.body;
    res.status(200).send({
        payload:{
            id,
            name
        }
    });
});

app.delete('/article', (req, res) => {
    const { id } = req.body;
    res.status(200).send({
     
        payload:{
            id
        }
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
