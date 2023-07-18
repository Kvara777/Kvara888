module.exports = {
  apps: [
    {
      name: "botJs",
      script: "bundle.js",
      watch: false,
      env: {
        NODE_ENV: "production",
      }
}
  ],
};
