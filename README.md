# GDOX - Awesome tool to automate the generation of your documents

Main Stack: MERN

Frontend
-
- TypeScript
- Angular 13
- RxJS
- Tailwind
- ngx-bootstrap
- jsPDF

Backend
-
- Node.js
- Express, REST
- MongoDB
- Mongoose
- Bcrypt hashing

Code Style
-
- ESLint
- Prettier
- Husky
# Backend Architecture 
![](https://github.com/wood1ouse/gdox/blob/master/rmResources/backend_diagram.png?raw=true)

# User Model 
![](https://github.com/wood1ouse/gdox/blob/master/rmResources/users.png?raw=true)

# Doctype Model 
![](https://github.com/wood1ouse/gdox/blob/master/rmResources/doctypes.png?raw=true)

# Data adding/changing scenario
Registration
-
- Collecting information about the user from the form
- Sending data to the server (when passing validation)
- Apply "pre-save" mongoose middleware
- Add data to Users collection

Creating a Document (registered user)
-
- Choice of document type
- Collecting information about the document from the form
- Sending data to the server (when passing the validation of a specific document),
- Add a document to the array of sub-documents of the corresponding user
- Return data about the document to the user, generate a layout depending on the type of document

Saving an image to the server
-
- Setting a photo in the User's FormGroup field using the FileReader
- Convert Angular FormGroup into a FormData object with the same fields
- Sending to the server as a file
- Generation of a unique name using uuid
- Moving a file with a new name to the static folder and subsequent storage on the server

Deleting a Document
-
- Deleting a document by a User
- Removing a document from the array of subdocuments of the current User
