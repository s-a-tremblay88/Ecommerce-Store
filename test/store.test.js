const request = require("supertest");
const app = require("../server/server.js");

// getAll
async function runTest() {
    try {
        const res = await request(app).get("/getAll");

        if (res.statusCode === 200) {
            console.log("trem0417@algonquinlive.com - getAll to show all product - 200 - PASSED");
        } else {
            console.log("trem0417@algonquinlive.com - getAll to show all product - FAILED");
        }
    } catch (err) {
        console.log("trem0417@algonquinlive.com - getAll to show all product - FAILED");
        console.error(err.message);
    } finally {
        process.exit(0);
    }
}

runTest();