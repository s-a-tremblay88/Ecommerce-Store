const request = require("supertest");
const app = require("../server/server.js");

const fetch = require("node-fetch");

async function runTest() {
    try {
        const res = await fetch("https://module10-store-products-production.up.railway.app/products");
        const data = await res.json();

        if (res.status === 200) {
            console.log("gods0011@algonquinlive.com - getAll to show all product - 200 - PASSED");
        } else {
            console.log("gods0011@algonquinlive.com - getAll to show all product - FAILED");
        }
    } catch (err) {
        console.log("gods0011@algonquinlive.com - getAll to show all product - FAILED");
    } finally {
        process.exit(0);
    }
}

runTest();