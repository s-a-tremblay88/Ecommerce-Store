// automate.js
// Runs all test scripts sequentially and prints clean output

const { exec } = require("child_process");

// Helper to run a command and print its output
function run(label, command) {
  return new Promise(resolve => {
    console.log(`Running: ${label}`);

    exec(command, (error, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);

      resolve(); // Continue to next test
    });
  });
}

(async () => {
  // My own test
  await run("My getAll Test", "node test/store.test.js");

  // await run("Teammate 2 Test", "node tests/teammate1.test.js");
  // await run("Teammate 3 Test", "node tests/teammate2.te
  // st.js");

  console.log("\nAll tests completed.\n");
})();