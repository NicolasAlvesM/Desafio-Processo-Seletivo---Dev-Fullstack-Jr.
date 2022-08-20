// 'polling' data from https://jsonplaceholder.typicode.com/users

// let users = '';

// const sleep = duration => new Promise(resolve => setTimeout(resolve, duration))
// const poll = (promiseFn, duration) => promiseFn().then(sleep(duration).then(() => poll(promiseFn, duration)))

// poll(() => new Promise(() => {https.get('https://jsonplaceholder.typicode.com/users', response => {
//   let data = '';

//   response.on('data', user => {
//     data+=user;
//   });

//   response.on('end', () => {
//     users = JSON.parse(data);
//   });
// })}), 60000);