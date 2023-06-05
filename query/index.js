const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts',(req, res)=>{})

app.post('/events',(req, res)=>{
    const {type, data} = req.body;
    console.log("Event Received:", req.body.type);

    if(type==='PostCreated')
    {
        const {id, title} = data;

        posts[id]= {id, title, comments:[]};

        console.log(data);

    }
    if(type==='CommentCreated')
    {
        const {id, content, postId} = data;

        const post = posts[postId];
        post.comments.push({id, content});
        console.log(data);

    }
});

app.listen(4002,()=>{
    console.log('Query listening on 4002');
})