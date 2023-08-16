# yues_website

### To do:
<table>
<tr>
<th> Dev's To Do </th>
<th> Design's To Do </th>
</tr>
<tr>
<td>


Home
---
- connect score to notion
- fix date and time formats
- add loading for api
- add dropdowns on navigation
- cleanup lion css
- add "empty dataset" error state

About
---
- add about pictures
- add loading for api
- redirect links to their respective urls
- bold the mobile staff titles

Teams
---
- Figure out how to ease the hover transition in and out

Other
---
- Clean up finished files and add comments
- add favicon
- document steps to do shit!
- remind ppl to add things to notion when updating it
- add an "opponent" prop on notion
- Update screen sizes to match Figma

</td>
<td>

Home
---
- opponent images for upcoming/recent games (just need a filler image incase we dont have their logo)

Teams
---
- Pictures for each game (both default and hover states)
 - Maybe make the hover img changes less drastic until we find a way to ease-in-out the animations


</td>
</tr>
</table>

### Requests for Sasha and Sarah and others
- What is our youtube channel?
    -  https://youtube.com/@YorkEsports
- What do we want our emails to be?

### Suggestions:
- Make the prehover games fully grey and white

### Restraints for the first itteration:
- Cant make Discord icon new ??

### Requests
- can you make the hero border imgs/svgs a 850 x 10 (the center one should stay 280 x 10)
    - Make them have an end pls
* refer to Figma for more

### Things to look for when testing:
- the URL for all the pages
- make sure all the links work for each page
- Check all size screens
- Keep design in mind

--------------------------------------

## Steps and Tutorials

### Setting up and running the project on your local machine (In Progress...)

1. Make a github account and a figma account 
2. Request access to this repository (repo)
3. Download:
    - git bash (https://git-scm.com/downloads)
    - github desktop (https://desktop.github.com)
    - Visual Studio Code (https://code.visualstudio.com)
    - node (https://nodejs.org/en/download/)
4. Open github desktop and click "Clone Repository" (or hold ctrl+shift+o). Click the "URL" tab and paste `https://github.com/AlAgilly/yues_website.git` in the input 
5. In Visual Studio Code (vsc) navigate to the folder you downloaded and add it to your workspace
6. Open up the console (ctrl + `) and navigate to the folder
7. Run `npm i`
8. Run `npm run dev`
### Figma Prototype (In Progress...)
#### Testing on Mobile & Tablet
1. Download the Figma App.
2. Navigate to the [Figma Prototype](https://www.figma.com/proto/U5EAS9EbPx4KpyezKQaguB/YUES-2022-23-WEBSITE?node-id=304%3A3189&scaling=scale-down-width&page-id=53%3A2&starting-point-node-id=304%3A3189) on your computer.

#### Testing on Desktop
1. Navigate to the [Figma Prototype](https://www.figma.com/proto/U5EAS9EbPx4KpyezKQaguB/YUES-2022-23-WEBSITE?node-id=304%3A3189&scaling=scale-down-width&page-id=53%3A2&starting-point-node-id=304%3A3189) on your computer.
2. Click the play triangle located on the top left of the prototype screen.


### Upload the files to the server (In Progress...)

We are using DigitalOcean to run this project. Once we make a pull request of our changed to main, the app will (should) build itself :)

--------------------------------------

## LATER

### Things to look into:
- Database
- Auto post to socials
- change the teams dir

### MongoDB structure?
- Users
    - Permisions (Role based)
        - Player
        - Coach
        - Manager
        - Member
        - Comp Directer
        - Exec (do we want to specify?)
        - Marketing Team member
        - Website Team member
        - Graphics Team member
        - Sponsorships Team member
    - Name
    - Email
    - Discord
    - Student Number
    - twitch
    - Twitter