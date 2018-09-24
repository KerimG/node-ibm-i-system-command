const db = require("idb-connector");
let query = `SELECT JOB_NAME,JOB_TYPE,JOB_STATUS,SUBSYSTEM,
ELAPSED_CPU_PERCENTAGE AS PERCENT
FROM TABLE(QSYS2.ACTIVE_JOB_INFO(JOB_NAME_FILTER => '*ALL')) A
ORDER BY ELAPSED_CPU_PERCENTAGE DESC`;

let dbconn = new db.dbconn();
dbconn.conn("*LOCAL");
let stmt = new db.dbstmt(dbconn);

function wrkactjob() {
  return new Promise((resolve, reject) => {
    stmt.exec(query, result => {
      resolve(result);
      stmt.close();
      dbconn.disconn();
      dbconn.close();
    });
  });
}

module.exports = {
  wrkactjob: wrkactjob
};
