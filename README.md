# To Run
The vue UI has been "compiled" and placed into the /public directory of the 
express/node.js backend.

This was to avoid the need for running two webservers.

In the /express-backend directory, run "npm run dev"

# Dependency

You will need a get a copy of auth_config.json. (or you can make your own)


# Log In
If you are logged in via Auth0, you can change the users location on the front page.

This was to show a simple authentication mechanic without the need of authorization.

However with more time I can add more features.



# Objective
Build a simple web app, demo it, and discuss it with team at interview.

# Description
Acme Co is having trouble tracking where its employees are working on a day to day basis.  Sometimes employees are working from unexpected locations, like home, the office, or the lab.  Acme Co wants a web application built that allows its users to publish their location.

# Requirements
1.	Web app shall show location status of all employees
2.	Web app shall allow named users to login to edit their status
3.	Status can be either:
    1. Working from home
    2. Working from office
    3. Working from lab
4.	Web app shall remember user status changes
5.	Web app shall include a view of the status history

# Constraints
* Back end tech stack is up to the implementor
* Front end needs to be Angular or Vue
* User management, like add/delete/edit need not exist
