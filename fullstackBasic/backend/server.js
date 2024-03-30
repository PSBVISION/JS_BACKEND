import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/jokes', (req,res) => {
    const joke = [
        {
            "id": 1,
            "title": "A Joke",
            "content": "This is a joke"
        },
        {
            "id": 2,
            "title": "Another Joke",
            "content": "This is another joke"
        },
        {
            "id": 3,
            "title": "A third Joke",
            "content": "This is third joke"
        },
        {
            "id": 4,
            "title": "A fourth Joke",
            "content": "This is fourth joke"
        },
        {
            "id": 5,
            "title": "A fifth Joke",
            "content": "This is fifth joke"
        },
    ]    
    res.send(joke)
})

// app.get('/', (req, res) => {
//   res.send('Server is ready!')
// })

app.listen(port, () => {
    console.log(`Serve  at http://localhost:${port}`);
}
); 