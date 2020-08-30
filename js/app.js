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

// POST posts
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
