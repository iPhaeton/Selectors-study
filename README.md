An example project to show usage of [Reselect library](https://github.com/reactjs/reselect) in a React-Redux application. 
Based on [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate).

To clone the project run  
`git clone https://github.com/iPhaeton/Selectors-study.git`  
`cd Selectors-study/`  
`git fetch --all`

There are three branches in the project:
memoized - to show correct usage of a Reselect selector
memoized-worng - to show incorrect usage of a Reselect selector which breakes memoization ability if the selector
unmemoized - to show caveats of using unmemoized selectors in a React-Redux application

Run `git checkout <branch>` to switch between the branches.

To start the project run   
`npm install` or `yarn install`  
`npm start`  
