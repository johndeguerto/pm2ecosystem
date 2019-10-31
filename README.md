# pm2ecosystem
pm2 ecosystem configuration example

## Install pm2 
```
// Linux
npm install pm2 -g

// Darwin - macOSx
sudo npm install pm2 -g 
```

## How to use?
To use this in development with pm2
```
//ie:
pm2 start ecosystem.config.js
```
To use it in production with pm2
```
pm2 start ecosystem.config.js --env production
```
## ecosystem.config.js
```
// ecosystem.config.js
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
  ``` 