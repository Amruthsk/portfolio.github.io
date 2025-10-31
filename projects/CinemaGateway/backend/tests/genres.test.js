// // Tarka: File ⇔ tests/genres.test.js

// // Tarka: (Karma) ⇔ (To Import) the [Instrument /] for making requests.
// const request = require('supertest');
// // Tarka: (Karma) ⇔ (To Import) the [Dravya] we are testing.
// const { Genre } = require('../models/genre');
// // Tarka: (Karma) ⇔ (To Import) the `[mongoose]` library to connect to the database.
// const mongoose = require('mongoose');

// let server; // Tarka: [Dravya] ⇔ A variable to hold our running server instance.

// // Tarka: (Karma) ⇔ (To Define) a `[Test Suite]` for all tests related to `/api/genres`. `describe` groups related tests.
// describe('/api/genres', () => {
//     // Tarka: (Karma) ⇔ (To Execute) this function `(Before)` *each* test in this suite.
//     beforeEach(() => { server = require('../index'); }); // Tarka: This starts the server.
//     // Tarka: (Karma) ⇔ (To Execute) this function `(After)` *each* test in this suite.
//     afterEach(async () => {
//         await server.close(); // Tarka: This closes the server, ensuring a clean slate for the next test.
//         await Genre.deleteMany({}); // Tarka: This cleans the database.
//     });

//     // Tarka: (Karma) ⇔ (To Define) a `[Test Suite]` specifically for `GET /`.
//     describe('GET /', () => {
//         // Tarka: (Karma) ⇔ (To Define) a single `[Test Case]`. The string describes the `(Expected Outcome)`.
//         it('should return all genres', async () => {
//             // Tarka: (Karma) ⇔ (To Seed) the database with test data.
//             await Genre.collection.insertMany([
//                 { name: 'genre1' },
//                 { name: 'genre2' },
//             ]);

//             // Tarka: (Karma) ⇔ (To Simulate) a GET request to the server.
//             const res = await request(server).get('/api/genres');
            
//             // Tarka: (Karma) ⇔ (To Assert) the `[Lakṣaṇa]` (Victory Condition) of the test.
//             expect(res.status).toBe(200); // Tarka: Anumāna ⇔ A successful GET should return status 200.
//             expect(res.body.length).toBe(2); // Tarka: Anumāna ⇔ The response body should contain the 2 genres we inserted.
//             expect(res.body.some(g => g.name === 'genre1')).toBeTruthy(); // Tarka: Anumāna ⇔ One of the returned objects must have the name 'genre1'.
//         });
//     });

//     // Tarka: (Karma) ⇔ (To Define) a `[Test Suite]` specifically for `GET /:id`.
//     describe('GET /:id', () => {
//         it('should return a genre if valid id is passed', async () => {
//             // Tarka: (Karma) ⇔ (To Create) a single genre to test with.
//             const genre = new Genre({ name: 'genre1' });
//             await genre.save();

//             // Tarka: (Karma) ⇔ (To Execute) the request with the ID of the genre we just created.
//             const res = await request(server).get('/api/genres/' + genre._id);

//             // Tarka: (Karma) ⇔ (To Assert) the victory conditions.
//             expect(res.status).toBe(200);
//             expect(res.body).toHaveProperty('name', genre.name); // Tarka: Anumāna ⇔ The returned object should have the correct name.
//         });

//         it('should return 404 if invalid id is passed', async () => {
//             // Tarka: (Karma) ⇔ (To Execute) a request with a fake, but validly-formatted, ID.
//             const id = new mongoose.Types.ObjectId();
//             const res = await request(server).get('/api/genres/' + id);

//             // Tarka: (Karma) ⇔ (To Assert) that the server correctly identifies the ID as non-existent.
//             expect(res.status).toBe(404);
//         });
//     });

//     // Tarka: (Karma) ⇔ (To Define) a `[Test Suite]` specifically for `POST /`.
//     describe('POST /', () => {
//         it('should return 400 if genre is less than 5 characters', async () => {
//             // Tarka: (Karma) ⇔ (To Execute) a POST request with invalid data.
//             const res = await request(server)
//                 .post('/api/genres')
//                 .send({ name: '1234' });

//             // Tarka: (Karma) ⇔ (To Assert) that the Gatekeeper's Law (Joi validation) worked.
//             expect(res.status).toBe(400);
//         });

//         it('should save the genre if it is valid', async () => {
//             // Tarka: (Karma) ⇔ (To Execute) a POST request with valid data.
//             await request(server)
//                 .post('/api/genres')
//                 .send({ name: 'genre1' });

//             // Tarka: (Karma) ⇔ (To Verify) the outcome by querying the database directly.
//             const genre = await Genre.find({ name: 'genre1' });
            
//             // Tarka: (Karma) ⇔ (To Assert) that the genre was actually created.
//             expect(genre).not.toBeNull();
//         });
//     });
// });