const fs = require("fs-extra");
var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const webConfigPath = "./build/web.config";

if (fs.existsSync(webConfigPath)) {
  fs.unlinkSync(webConfigPath);
  new CaseSensitivePathsPlugin({ debug: true });
}

fs.copySync("./webconfig/web.config", webConfigPath);
