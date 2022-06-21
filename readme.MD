## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible

We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------|
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:

1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.
   * Why do you think that was done, what are the advantages / disadvantages?

  Advantages:
  - Having each component in a different file as has been done in the app-standalone code makes navigation a lot simpler for the developers as it's easier to find all of the different components. This can make it easier for new developers to get used to the code base of the app.
  - Separating components into different files also makes it easier to reuse code. If the developer wants to reuse a certain component then they can easily import the file that that component is in and they can therefore reuse that section of code as many times as they want. This is makes it easier to adhere to one of the principles of software engineering - Don't Repeat Yourself (DRY).
  - For larger applications, it also allows for lazy loading of components. If the components are split up then some components can be set to lazy load, using dynamic imports, which can have a big positive impact on the load speed of web pages which, in turn, can massively improve other important metrics like conversion rate.
  - Writing tests for specific components is easier if the components are in different files and the relevent tests are easier to locate.

  Disadvantages:
  - If an app was initially created to have all components in a single file, there will be a time cost associated with restructuing and splitting up the app.
  - If too much nesting is done in the file structure then it can become difficult to import files using their relative file paths and it can also be difficult to manage and update the imports if the file strcuture changes.
  - There is more maintenance involved and if the file isn't named the same as the component name then it could lead to more confusion.


2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

Test cases are missing from the app. Without proper test cases, the app could have a significant number of bugs which would be detrimental to the user experience and could have knock on effects such as a reduction in revenue generated from the app and bad brand perception.

The best way to definitively know if an app or if certain features within an app are working as intended is to write test cases.

However, tests can be time consuming and they have to be properly thought out in production ready apps or else false positive errors could occur which would delay deployments of the app. Reusable test cases can be written to decrease the time required to write the tests and the possible test cases should be prioritised in terms of highest impact.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

I was not familiar with Redux until I just Googled it but from what I have learned, Redux is a standalone JavaScript library that's used to store the states of variables. It creates a process for centrally storing and reading the states of variables so that components cannot read or change the states unintentionally.

The way that the states are changed has to be specifically defined so Redux is really useful in large or complex applications where there are a lot of different states or where the states need to be modified frequently. It is also useful for apps which have multiple developers working on them as Redux allows you to predictably know exactly when and how the states have changed.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like*

n/a - applying for Integration Engineer role.

### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.

- Please see the app-standalone version for my changes
- My solution probably isn't the nicest but it works and this is my first time using React so I did it as well as I could without spending forever on it!

2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.

- I'm unsure what's meant by 'adding a named player X and Y' so I've kept it as Player X and Player O to reference who is noughts and who is crosses.
- I've added a 'play again' function and a 'play again' button along with a league table that displays the result for each game, up to a maximum of 5 games.

3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

- I have added functionality to display a message in the case of a draw.
- I have added some tests for the Board and Game components

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience.
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it.
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.
