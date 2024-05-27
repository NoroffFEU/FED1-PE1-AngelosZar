# FED1 Project Exam 1

Project description

HotView Labs is a responsive web application which is a fictional client.
It consist of 6 different pages and it is build with vanilla javascript ,HTML and css fpr styling.
The pages are decided into two categories .Public pages and admin pages.
The public pages are : Homepage ,single blog view ,log in and about us.
The pages available only with admin access consist of : blog edit page and user registration page .

Fictional client :
· Name: HotView Labs
· Sector: Tech Research and Development
· Size: 30 employees
· Location: Worldwide
· Mission: Provide the most accurate and up to date insights to tech leaders across the world.

Homepage:

Hero section consists of two parts,both of which are asynchronous function retrieving data one from Pexels.com (video component) and the other one from an api provided by noroff.

Next section consist of one image banner ,Fetch single api by id.

Next component is a slider carousel consisting of three images .Asynchronous function retrieving the last three posts. (Requested by client)

Next , is Most recent section which is a grid with blog posts.It has been applied pagination and 6 posts are viewed initially with a button giving the option of viewing more.
The order of post can change with the all articles dropdown options filtering new to old or old to new.
user can filter posts by their respected category.

Newsletter section which is currently inactive but ready for future use.and mostly to give a more real sense.

All blog thumbnail redirect the user to the single blog view page.

Single blog view page:

A responsive layout consisting of a single post chosen by the user. This page provides all the necessary information about the post , among the : category of article ,date created author, image for the post and article body as well as a button which on click copies to clipboard the pages url.
(Requested by client)

The page comes with a section of recommended articles, recommended are in the same category as the chosen article.

About us page :

Hero image and a AI generated text for the imaginary client.

Log in page :

Consists of a validated login form requesting access and a token from web api.This token gives admin access to the user if credentials are correct.

Register user :

Given admin access the user can create a new user by entering : valid email from noroff organization.
A password and a username of his/her choice .

Admin page:

The admin has access to all posts and can among other things:

1. Chose the article he/she wishes to edit by clicking on post.
2. User will be provided with the information of the post filling up the edit form .
3. Can save changes on edited post with submit changes button.
4. User can create a new blog post by providing information on the edit form and clicking on create a new post .
5. User can delete an existing article by clicking the of preference and clicking delete button.

All pages have a search bar that searches for articles depending on users input .

When logged in the user can log out simply by clicking on the log out button.

Declaimers :

Posts have been created with chat gpt to avoid copyright issues.

css reset from /_ http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
_/

Spinning loader from /_ https://css-loaders.com _/
Free to use no attribution required.

Images and videos are from pexels.com and unsplash.com free to use no attribution required.

Additional information :

Link to static website : https://hot-viewlabs.netlify.app/index.html
