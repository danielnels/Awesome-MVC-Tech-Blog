# Awesome-MVC-Tech-Blog
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![EXPRESS.JS](https://img.shields.io/badge/Express.js-20232A?style=for-the-badge&logo=express&logoColor=61DAFB)
![HEROKU](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
## Description
A Tech-Blog that allows users to publish articles, blog posts, thoughts and opinions
This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

 ## Table Of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [This Weeks task](#this-weeks-task)
  * [Acceptance Criteria](#acceptance-criteria )
  * [Walkthrough Demo](#walkthrough-demo)
  * [App image ](#app-image)
  * [Deployed Application Links](#deployed-application-links)
  * [Usage](#usage)
  * [Technologies Used](#technologies-used)
  * [Packages](#packages)
  * [Questions](#questions)
  * [License](#license)
  

## This weeks Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Usage

To use this application:

* Clone the GitHub repository at: https://github.com/danielnels/-Awesome-Note-Taker-Express.js.git
Download and install node.js.

* To automatically install dependencies, run "npm i" 

* Be sure to include your MySQL user/password information in .env file.

Database Connection
* mysql -u root -p
* source schema.sql
* npm run seed [To seed the file]

Run the app

* npm start [To start the server] and navigate to http://localhost:3001/ in your browser OR Use the Heroku link https://awesome-tech-blog.herokuapp.com/ in this repository

## Technologies Used

#### * Node.js
#### * HTML
#### * Java Script
#### * CSS
#### * Heroku


## Packages

#### * Package.json
#### * express
#### * Mysql2
#### * dotenv
#### * sequelize
#### * connect-session-sequelize
#### * express-handlebars
#### * express-session
    
## Walkthrough Demo

https://user-images.githubusercontent.com/94213022/159381391-5ca51fb5-fe02-47c4-8c37-a8c9f2f62cb8.mp4

## App images
![demo-image](https://user-images.githubusercontent.com/94213022/159381408-705cf928-8560-495c-b1f8-2dcc0d97ed64.png)
![demo-5](https://user-images.githubusercontent.com/94213022/159381425-64dc3d0f-542c-4ef8-8e28-1275a42b01d5.png)
![demo-4](https://user-images.githubusercontent.com/94213022/159381435-ff336db6-cd7b-4dd8-b867-fb8bfc0f3f06.png)
![demo-3](https://user-images.githubusercontent.com/94213022/159381437-1e939e29-4930-4e84-87b3-b5bf23bb556e.png)
![demo-2](https://user-images.githubusercontent.com/94213022/159381444-99c29a68-64c9-4635-9c6d-65d30a02f565.png)


## Deployed Application Links
Heroku: https://awesome-tech-blog.herokuapp.com/

Github :https://github.com/danielnels/Awesome-MVC-Tech-Blog.git

## Questions
  Please e-mail me if you have any questions about this App
  danieln@newground.net.au 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
