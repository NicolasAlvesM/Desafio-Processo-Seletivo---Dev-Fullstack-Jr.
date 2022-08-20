export default{
    render(user){
        return{
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }
    },
    renderSome(users, userAmount){
        users.splice(userAmount,users.length);
        return users.map(user=>this.render(user));
    },
    renderMany(users){
        return users.map(user=>this.render(user));
    }
}