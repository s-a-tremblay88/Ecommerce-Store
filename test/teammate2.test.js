const request = require("supertest");
const app = require("../server/server.js");

const fetch = require("node-fetch");

async function runTest() {
    try {
        const res = await fetch("https://cst8326brettnorbury-production.up.railway.app/getAll");
        const data = await res.json();

        if (res.status === 200) {
            console.log("norb0001@algonquinlive.com - getAll to show all product - 200 - PASSED");
        } else {
            console.log("norb0001@algonquinlive.com - getAll to show all product - FAILED");
        }
    } catch (err) {
        console.log("norb0001@algonquinlive.com - getAll to show all product - FAILED");
    } finally {
        process.exit(0);
    }
}

runTest();
