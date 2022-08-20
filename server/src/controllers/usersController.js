import https from 'https';
import userView from '../views/users_views.js'

let users=[];

export default class UsersController{

  async index(req, res){

    const {limit} = req.query;

    if(!users.length)
      https.get('https://jsonplaceholder.typicode.com/users', response => {
          
        let data = '';

        response.on('data', user => {
          data+=user;
        });

        response.on('end', () => {
          users = JSON.parse(data);
          return res.json(userView.renderSome(users,limit));
        });
      });
    else
      return res.json(userView.renderSome(users,limit));
    }
}