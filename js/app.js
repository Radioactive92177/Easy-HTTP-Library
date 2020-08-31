/*
This JavaScript file is a demonstration of the use of the "EasyHTTP" library
*/

// Instantiating the library object
const http = new EasyHttp();


// Creating sample data for "POST" request and "PUT" request
const data = {
  name: "John Doe",
  username: "_John_Doe_",
  email: "johndoe@company.com",
};


// Demonstration of "GET" request
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


// Demonstration of "POST" request
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


// Demonstration of "PUT" request
http
  .put("https://jsonplaceholder.typicode.com/users/1", data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });


// Demonstration of "DELETE" request
http
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
