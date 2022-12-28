// import chai from 'chai';
// import mocha from 'mocha';
// import chaiHttp from 'chai-http';

// chai.use(chaiHttp);
// const expect = chai.expect;


// const describe = mocha.describe;
// const it = mocha.it;


// const sendRequest = (method, path, data) => {
//     return chai.request('http://localhost:5000/api')[method](path)
//     .send(data)
// };


// const registerBody = {
//     fullname:"John Smith",
//     email:"john@gmail.com",
//     password:"johnsmith12222",
//     phone:927418
// };


// const loginBody = {
//     email:"john@gmail.com",
//     password:"johnsmith12222",

// };

// describe('POST /auth/register', ()=> {
//     it('should return a string', async () => {
//         const res = await sendRequest('post', '/auth/register', registerBody);
//         expect(res).to.have.status(201);
//     })
// })


// describe('POST /auth/login', ()=> {
//     it('should should set a cookie after successful login', async () => {
//         const res = await sendRequest('post', '/auth/login', loginBody);
//         expect(res).to.have.status(200);
//         expect(res).to.have.cookie('access_token');
//     })
// })