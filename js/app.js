const http = new EasyHTTP();

// GET posts
http.get("https://jsonplaceholder.typicode.com/postsy", function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
