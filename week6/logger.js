let version = 2.6;
function log() {
  console.log("logged successfully");
}
// console.log(module);

module.exports.log = log;
module.exports.version = version;
