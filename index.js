const { wrkactjob } = require("./wrkactjob");

(async () => {
  let result = await wrkactjob();
  console.log(result);
})();
