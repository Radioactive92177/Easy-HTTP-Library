const http = new EasyHTTP();

// GET request
http.get("https://jsonplaceholder.typicode.com/posts", function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Create sample data
const data = {
  title: "Custom Post",
  body: " This is a custom post",
};

// POST method
http.post("https://jsonplaceholder.typicode.com/posts", data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// PUT method
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
