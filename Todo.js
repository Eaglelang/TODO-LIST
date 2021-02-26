File 1: Todo.js

const express= require('express');
const app= express();

app.get('/', (req, res){
			res.json({message: 'Great stuff here'})	
})

app.get('/api/todotask', (req, res){
	
})


const port= process.env.PORT||3000;
app.listen(port, (req, res){
			console.log(`listening on port ${port}...`)