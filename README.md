<h1>Noteful Server<h1>

* Live Demo*: https://immense-crag-05203.herokuapp.com/

## Endpoints

* https://immense-crag-05203.herokuapp.com/api/notes
-Supports GET and POST
* https://immense-crag-05203.herokuapp.com/api/notes/:node_id
-Supports GET, DELETE, and PATCH
* https://immense-crag-05203.herokuapp.com/api/folders
-Supports GET and POST
* https://immense-crag-05203.herokuapp.com/api/folders/:folder_id
-Supports GET, DELETE, and PATCH

## Developer Setup

* Clone this repository to local: git clone https://github.com/melleehall/noteful-server.git
* cd into the cloned repository
* Make a fresh start of the git history for this project with rm -rf .git && git init
* Install the node dependencies npm i
* Create environmental variables as needed in a .env file
* Run npm run migrate to set up the db

## Scripts
Start the application npm start

Start nodemon for the application npm run dev

## Built With

* Node.js
* Express
* JavaScript 


