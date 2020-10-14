# Walk-In-Events

Full-stack solution, where react-build is included in node-backend and published to heroku using script in node-project's package.json


## Developing React app in localhost

Open folder walkin-react-front and start with "npm run dev". It will run server in background, and react app is running at localhost:3000


## Testing React app with node-backend

Open folder walkin-node-backend, run "npm install" and start with "npm run build:ui". It will build react app from folder walkin-event-front and add the build to node app folder. After that run "npm start", that will start the server and serve react front at localhost:3001


## Deployment of full-stack solution to Heroku

From walkin-node-backend run "npm run deploy" or "npm run deploy:full" in case there is recent react build to include // script needs fix

Sub-dir deployment from repository root folder fullstack-branch: git subtree push --prefix walkin-node-backend heroku master
