module.exports = {
  apps: [{
    name: "diabetes-ai.live",
    script: "./index.js",
    env: {
      "NODE_ENV": "development"
    },
    env_staging: {
      "NODE_ENV": "staging"
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }]
}