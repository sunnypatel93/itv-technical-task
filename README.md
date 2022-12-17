# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Sunny Patel's notes
As I timeboxed myself an hour for this task, I mainly focussed on the functionality of the application. This includes: 
- Adding an item to a ToDo list. 
- Mark a ToDo item as complete. 
- Mark an item thats completed back to ToDo.
- Storing the data in LocalStorage. 

I have followed as many coding principles as I could in the time allocated, which includes: 
- Applying useState and useEffect correctly in order to prevent side effects 
- Sensibly manipulating data 
- Clear naming conventions 

Due to the time frame, there were a few things I would have liked to have added or have done differently. This includes: 
- Functionality: Being able to edit an existing task - providing an edit button which loads the text back into the text field to be edited.
- UI: Provide better styling
- UI: Support mobile design 
- Validation: Providing appropriate validation when trying to submit an empty field
- Functionality: Supporting the scenario where 2 todo tasks have the same name - currently, both will checked and unchecked due to the way I am checking... maybe providing some sort of ID to distinguish between the two 
- Code Cleanup: How i'd approach this: 
1) Keep things simple and reusable - breakdown the different sections into its own component (TodoFormWrapper, TodoListwrapper, CheckedListWrapper). This would also make it easier for testing, where you can test each component individually rather than as one big app
2) There could probably be a cleaner way of doing handleCheckedToDoItem and handleUnCheckedToDoItem, as theres a lot of duplicated code between the two

- Tests: Provide unit tests to ensure this works correctly. Things I would test are (according to my current functionality): 
1) Adding a todo item - does it update TodoList state? 
2) Adding a todo item - does it update localstorage? 
2) Adding a todo item - is the isChecked property in the state object set to false? 
3) On mount, does it retreive the data from localstorage? 
4) Completing a todo item - does it remove from the TodoList state and add to checked state? 
4) Completing a todo item - does it update local storage? 
5) Completing a todo item - is the isChecked property in the state object set to true?
6) On mount, does it retreive the checked data from localstorage? 
