import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

console.log('log before app.get');

app.get('/', (request, response) => {
    console.log('request', request.url);
    console.log('starting  request/response cycle');
    response.send('hello from backend to frontend!');

});
console.log('done!');
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});