// import chai, { should } from 'chai';
// import mocha from 'mocha';
// import chaiHttp from 'chai-http';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookiejar';

// chai.use(chaiHttp);
// const expect = chai.expect;


// const describe = mocha.describe;
// const it = mocha.it;


// const baseUrl = 'http://localhost:5000/api'; 
// const updateBody = {
//     phone:1111111
// }


// const loginBody = {
//   email:"john@gmail.com",
//   password:"johnsmith12222"

// };

// const token = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWI1MmM2M2QyNWI3ZWY5MzJmNjk4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzIyNDA5NzJ9.oM9eXZSrnaQPxzHThwakBXad0PT_GgOQ6oSvjqenkic; Path=/; HttpOnly'
// const secret = '*w14GPVuoHjPtp1vIc5a4SED4UxPZifL$qnD11KcY9j2FO712^'
// const subToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWI1MmM2M2QyNWI3ZWY5MzJmNjk4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzIyNDA5NzJ9.oM9eXZSrnaQPxzHThwakBXad0PT_GgOQ6oSvjqenkic'


// describe('POST /auth/login', ()=> {
//   it('should set a cookie after successful login', async () => {

//       const res = await chai.request(baseUrl).post('/auth/login').send(loginBody)

//       expect(res).to.have.status(200);
//       expect(res.body).to.have.property('details')
//       expect(res.body.details).to.have.property('_id');
//       expect(res.body.details).to.have.property('isAdmin')

//       const id = res.body.details._id;
//   })

// })

// const data = jwt.verify(subToken,secret);
// const id = data.id;


// describe(`PUT /users/${id}`, () => {
//   it('should return json data', async ()=>{
//     const res = await chai.request(baseUrl).put(`/users/${id}`).set('Cookie',token)
//     expect(res).to.have.status(201);
//     expect(res.body).to.have.property('_id');
//     expect(res.body).to.have.property('email');
//       expect(res.body).to.have.property('password');
//   })
// })

// describe(`GET /users/find/${id}`, () => {
// it('should return json',async()=>{
//   const res = await chai.request(baseUrl).get(`/users/find/${id}`).set('Cookie',token)
//   expect(res).to.have.status(200);
//   expect(res.body).to.have.property('_id');
//   expect(res.body).to.have.property('email');
//     expect(res.body).to.have.property('password');
// })
// })

// describe(`DELETE /users/${id}`, () => {
// it('should return a string', async ()=>{
//   const res = await chai.request(baseUrl).delete(`/users/${id}`).set('Cookie',token)
//   expect(res).to.have.status(202);
//   expect(res.body).to.equal('User has been deleted.')
// })
// })

