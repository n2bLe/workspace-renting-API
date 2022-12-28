// import chai from 'chai';
// import mocha from 'mocha';
// import chaiHttp from 'chai-http';
// import jwt from 'jsonwebtoken'

// chai.use(chaiHttp);
// const expect = chai.expect;


// const describe = mocha.describe;
// const it = mocha.it;
// const baseUrl = 'http://localhost:5000/api'


// const workspaceBody = {
//   city: "Algiers",
//   address : "Route Mahmoudia, 58",
//   type: "Co-working office",
//   desc : "A large office with 8 desks fully setup with all devices needed",
//   access : "24/7",
//   featured : true,
//   unavailableDates: ["2023-01-01", "2023-01-05"],
//   price : 25000,
//   features:["Fast Wi-Fi","Fully New & Up to date devices"],
//   photos:["https://preferredofficenetwork.com/wp-content/uploads/2021/08/Venture-X-Charlotte-Toringdon1-835x467-1.jpg"]
// }

// const updateBody = {
//   city: "El Harach",
//   address: "Belfort, 240"
// }


// const token = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM2Nzk0MGU1NjRjODVlZWVhMDA1NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjI0MzEzNn0.waLZDpnNO6rNXo31Ui0jUt7lvJK0aQxC7Nvj_gCmPss; Path=/; HttpOnly'


// describe('POST /ws', ()=>{
//     it('should create a workspace object', async ()=>{
//         const res = await chai.request(baseUrl).post('/ws').send(workspaceBody).set('Cookie',token);
//         expect(res).to.have.status(201);
//         expect(res.body).to.have.property('city');
//         expect(res.body).to.have.property('address');
        
//         const id = res.body._id;



//         describe(`PUT /ws/${id}`, () => {
//             it('should update an exsiting workspace object', async ()=>{
//                 const res = await chai.request(baseUrl).put(`/ws/${id}`).send(updateBody).set('Cookie',token)
//                 expect(res).to.have.status(201);
//             })
//           })
          
//           describe(`get /ws/find/${id}`, () => {
//             it('should return a workspace object', async ()=>{
//                 const res = await chai.request(baseUrl).get(`/ws/find/${id}`).set('Cookie',token)
//                 expect(res).to.have.status(200);
//                 expect(res.body).to.have.property('city');
//                 expect(res.body).to.have.property('address')
//             })
//           })
        
//           describe('get /ws', () => {
//             it('should return a list of ws', async ()=>{
//                 const res = await chai.request(baseUrl).get('/ws').set('Cookie',token)
//                 expect(res).to.have.status(200);
//                 expect(res.body).to.be.an('array');
//             })
//           })
        
//           describe(`delete /ws/${id}`, () => {
//             it('should delete a workspace', async ()=>{
//                 const res = await chai.request(baseUrl).delete(`/ws/${id}`).set('Cookie',token)
//                 expect(res).to.have.status(202);
        
//             })
//           })
//     })
//   })



