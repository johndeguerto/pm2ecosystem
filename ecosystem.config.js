/**
 * Execute this using pm2 s
 * ie: To start in production 
 * pm2 start ecosystem.config.js --env production
 * 
 * ie: TO start in development
 * pm2 start ecosystem.config.js
 */
module.exports = {
    apps : [
        {
          name: "myapp",
          script: "./index.js",
          watch: true,
          env: {
              "PORT": 3001,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 3000,
              "NODE_ENV": "production",
          }
        }
    ]
  }