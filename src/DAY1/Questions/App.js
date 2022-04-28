import React from 'react'

const App = () => {
  return (
    <div>
      <h1>What is JSX?</h1>
      - JSX is a Javascript extension which enables us to write HTML code inside a Javascript file. Thus making it simpler to converge and embed the code into one single file.

      <h1>What are features of react?</h1>

      - React is a JavaScript open source library which uses component based structure for the UI display.

      a) React is becoming popular during the past few years because of it's easy learning curve. This is due to the base knowledge required to learn react i.e HTML,CSS,JavaScript.

      b)Another feature is that react is faster and efficient compared to plain JavaScript. The reason for this is react uses a concept called virtual DOM.

      c) So firstly DOM (Document object Model) is a tree like structure which contains all the HTML elements within it and at it's root.
      Whenever a change occurs in the DOM the whole structure is reloaded/re-rendered which consumes unnecessery resources. To overcome this Virtual DOM was introduced in React. It is an exact copy of the Real DOM and there are 2 of them. Let's call it Fresh and Dirty Virtual DOM.

      So whenever a change occurs on the page rather than reloadin the whole page the Dirty Virtual Dom changes its state. Then it is compared to the Fresh virtual DOM via Diffing algorithm which identifies the differences between nodes of the DOM. Then after changes are made the only part which changed is updated in the real DOM and rest is left unchanged. This whole process is known as reconciliation.

      d) Also react has one way data binding. This means data flows in uni-direction i.e from Parent to child nodes and not vice-versa.

      <h1>What is single-page application and multi-paged application?</h1>

      - Whenever an action is triggered on the UI and if the page reloads then that is a multi-paged Application. While if the page doesn't reload and only a particular component of the UI changes and rest of the page remains the same then it is a single paged application.

      <h1>Library vs Framework</h1>

      Library: a) Library is a set of methods which have pre-defined actions. b) These methods can be called by the user whenever requried in the code. c) The user can control the flow of the application. d) Library can be plugged into the code as per user requirements

      Framework: a) Framework is set of libraries which carry out specific actions. b) In framework the user cannot control the flow of the application. c) The Framework decides which action will be called. d) The Framework plugs in the user code into itself to carry out the actions.

      <h1>Named and Default export.</h1>

      - We use named export when we have multiple components inside a single js file. These files are imported in the parent component using "{ }" and are comma seperated. While default export is used when there is a single component that is to be exported and it is imported in plain text.

      Named exp -
      syntax : export componentName { }

      Default exp -
      syntax : componentName{

      }
      export default componentName
    </div>
  )
}

export default App