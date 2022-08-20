import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, ()=>{
  console.log('Express server listening on port', process.env.PORT || 3333);
})