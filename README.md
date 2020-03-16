# Planet Man - Second Milestone Project

Hello and welcome to my Second milestone project. this project will help to get a first-time game developers’ game out there for users to experience and supply feedback. When visiting the website, the users will be hit with information about the developer and what his goals are in the future. The user will be able to find information about the game on the home page and what its end goals are.

The game itself is a very simple but addicting game. The games path is simple, so it attracts people of all ages. there is no over complicated story to follow the game is designed so that a user can come along visit the website and start playing straight away without having to remember where they left off and just pass the time. The goal is simply get a high score and eventually the users will be able to play against each others high scores when a leader board is added to the game.

# UX

This project uses skills that i have learned so far working through the course and skilled that i have acquired from my own research to create a responsive website that supplies a game that users can come and enjoy playing. The aim of this website is to provide an enjoyable game for users to come and experience so they can work to beat high scores set by themselves. The feedback that is left by users will be used to help better the game and add new features, so the users are always happy and the game stays interesting. Creating this game i am helping better myself and my skills and showcasing something that i am really interested in and potentailly want to persue in the future.

* The user wanted to know more about the developer and what their goals are for the future. This information can be found when the user first loads the site on the home page there is a full section dedicated to information about the developer and what their goals are in the future. This section is clearly titled so them user can't get lost when trying to find it

* The user wanted to know more about the game and what the goals are. This information can also be found on the home page of the website, a full section will also be dedicated to the game and what its about. a title is given to this section also so the user wont struggle to find it.

* The user wanted to know how to play the game and what the controls are. To do this all the user has to do is navigate over to the home page where they will find a section on how to play. This will be clearly titled so the user can find it easy.

* The user wants to know what the developer is doing to better the game and fix issues that arent working. This section will be in the Patch notes section on the home page, the patch notes will hold all the inforamtion on what the developer is adding to the game and if the games broke or any fixes are needed they will also be displayed in this area.

* The user wants to play the game. At the top of the website there is a simple navigation bar that the user can use to access different areas of the website. To access the game and play it all they need to do is go to the top of the page and click the game section and the game page will load so they user can play.

* The users visiting the website want to be abele to leave comments on the game. Mybe add some features they would want to see or leave a review for the developer. This section has its very one page called comments. This can be found at the top on the navigation bar. When clicked it will take the user to the comments page where they will be able to leave their name and comment and when it is submitted the comment will be displayed on the page. 

To view my UXD you can navigate over to my UXD directory. There you can view my Scope Plane, Strategy Plane, Structure Plane and Skeleton Plane. [https://github.com/ChrisRiley3/Second-Milestone/tree/master/user-design-experience].

# Features

* Navigation Feature: This allows the users visiting to the website to navigate around it freely. The navbar is at the top of every page so no matter where the user is on the website they can navigate from page to page. The Navbar is also fully responsive so as the user alters the size of their window the navbar will adjust. 

* Game Feature: This is the main reason the users will be visiting the website. The game itself has many features such as moving objects, physics, playable characters, moving spritesheets, enemies, things to collect, a control system, a scoring system, a high score system where your score is saved on your local storage so you can always try and beat your high score. The game is also continuously running so you dont have to worry about long loading screens.

* Comments Page: The comments page allows for interaction between the developer and the users, this is probably the most important page of all because it gives the users a chance to leave reviews on what they liked and disliked it also gives them a chance to tell the developer what they would like to see in future releases, the users can see these up and coming features in the patch notes on the home page.

### Future Features

* A store: As the game starts to become more and more popular a store page will be added so all them hard core fans can finally give something back to the developer and show their support, but not everything will come at a price. there will also be rewards given out to the loyal fans and the store page will be where they can come to collect their rewards. 

* A leader board: The leaderboard will be the next big thing that will come to planet man, as the developer i know how much it means to other users to be able to compete against eachother, so this feature won’t be far off.

* Game Features: Eventually they will be loads more features added to the game itself such as different playable characters, power ups to collect, different maps, audio, multiplayer, the list goes on and the oppertunities are endless but the main thing to keep in mind is not to bring all these features out at once, by bringing them out one by one over time it will keep the game interesting for a longer period of time. 
 
# Technologies used 

* HTML5
* CSS3
* Bootstrap4
* GIT
* Github
* Google Chrome Developer tools 
* Visual Studio Code
* Google Fonts
* Javascript 
* Jquery 
* JSON
* Phaser.io framework
* Local Storage

# Testing 

When it came to test my code i used w3c validator, they offer a free service where you can input your code and they will tell you any adjustment you need to make to it. for my html and javascript i used [https://validator.w3.org/], and to validate my css i used [https://jigsaw.w3.org/css-validator/]. wHen you arrive at both site all you have to do is navigate over to the "by direct input" section and copy and paste your code in the box provided you will then go ahead and click check, this will check the code that you have entered and come back with any errors and adjustments you may need to make. 

Every page in this project was tested over and over again till i was completely happy. Starting off with the navigation bar i used a bootstrap navigation bar and altered it to my needs. i checked that its fully responsive in all sized windows which it is and also i check the hamburger menu works properly when the window is a smaller size. every link in the navigation bar has been checked throughly to make sure users can navigate round the whole site no matter what page they are currently on. Each section to the home page has been checked to see if it was fully resposive so the user won’t have any trouble reading it if they decide to play the game in a smaller window. 

The game itself went through alot of testing, I personally tested the game step by step as i was making it. This was to make sure everything i wanted to happen in the game happened as it should. firstly, i had to load the framework i was using into my webpage. there is a step by step instruction on how to do this at [http://phaser.io/tutorials/making-your-first-phaser-3-game/part1]. Once the framework was loadded in using the developer tools i hit f12 and opened up the console, i could see that phaser had been loaded and was ready. I could then start to make my game. There are many ways that you can use phaser and it is a very powerful framework when coming to making browser game. Every step i took when making the game was added and then pushed to my github page [https://github.com/ChrisRiley3/Second-Milestone], this helped to make sure that no step was rushed, and everything was tested out properly before i was happy to push the code on. I came across many bugs when trying to make the game, for example at first the playable character's spritesheet wouldn't work properly, after looking around on the internet at multiple tutorials i fianlly cracked it and if you notice when moving the player around the game canvas their position moves but also depending on what direction they are going thats the way the character is facing. When i added the planets and stars at first i couldnt get the functions to work and the game kept freezing, this was amended after multiple tries and now when you play the game you will notice when you come into contact with a planets yours and the planets position will reset and the game will restart. However, when you come in contact with a star you will notice the star disappears and you recieve 5 points. When adding the scoring system i tested with a good variety of number to make sure it worked properly and went up in the exact increments i wanted. I added a high score to the game to finish it off, to test this all i done was close the browser and re open it and when it loaded i could see that my high score was still there so i knew that worked.

When making the comments page I needed abit of help to get the code correct i have linked in the notes at the top of the comments page which source i used to help me. when testing this page i put in my name, date and a little comment to see that once the "Add Comment" button was clicked the comment was added to the page. this was great for small comments but i tried a extra long comment and the text didnt wrap inside the container I had it in. to fix this i had to add "word-wrap: break-word;" to my main.css file this then allowed the text to wrap inside the container. Yet again i done multiple tests on this page refreshing it and closing it down to see if the comments stayed and they did.



