const { exec } = require("child_process");

function run(label, command) {
  return new Promise(resolve => {
    console.log(`\nRunning: ${label}`);

    exec(command, (error, stdout, stderr) => {
      if (stdout) console.log(stdout.trim());
      if (stderr) console.error(stderr.trim());
      resolve(); // Continue to next test
    });
  });
}

(async () => {

  // 1. My test
  await run("My Store", "node test/store.test.js");

  // 2. Teammate tests
  const tests = [
    {
      label: 'Brett Norbury (Teammate 2) Store',
      script: 'node test/teammate2.test.js'
    },
    {
      label: 'Jasper Godse (Teammate 3) Store',
      script: 'node test/teammate3.test.js'
    }
  ];

  for (const t of tests) {
    await run(t.label, t.script);
  }

  console.log("\nAll tests completed.\n");
})();
