import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.get('/api/hello', (req, res) => {
        res.json({status: 'ok'})
    })
    server.use((req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (error):void => {
        if (error) throw error;
        console.log(`> Server running on http://localhost:${3000}`)
    })
}).catch((error) => {
    console.log(error)
})