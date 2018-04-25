## Event Be Right
EventBright helps a user to see all of his events on eventbrite.com and to create events that will be stored in the local rails Api. Moreover these events can be modified and deleted.
 This app is created using "create-react-app" and the rails Api is created using "rails new".
 This app utilizes one of the most powerful react/redux concepts like BrowserRouters, Isomorphic fetch and Redux Thunk       Middleware.

## Getting Started
  - Fork and clone the repo from        https://github.com/anniezh12/EventBright
  - cd eventberight/EventApi
  - bundle install
  - rake db:migrate
  - rake db:seed(to seed the data in data.js)
  - rails s(to start rails server)
  - Open a new tab and cd eventberight
  - npm start(browser will show the fully functional app)

## Accessing eventbrite API
  To see your events fron the eventbrite.com (external API) you need to an access token from eventbrite.com and change it in src/components/eventsfromapi.js.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:
 * ES2016
 * ES2017.
 
 ## License

 The gem is available as open source under the terms of the MIT License.
