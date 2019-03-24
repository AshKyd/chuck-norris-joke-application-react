This is an Application where we can fetch 10 Random Chuck Norris jokes.

We can mark certain jokes as favourite. The favourite jokes will appear in a favourites list with a max of 10 (unique) items.

We can also turn on/off a timer via a button (every 5 seconds) which will add one random joke to the favourites list.

This application has a mocked login, with the following password complexity requirements:

- Passwords must include one increasing straight of at least three letters, like abc , cde , fgh , and so on, up to xyz . They cannot skip letters; acd doesn't count.
- Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters and are therefore confusing.
- Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
- Passwords cannot be longer than 32 characters.
- Passwords can only contain lower case alphabetic characters.

## Developing

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
