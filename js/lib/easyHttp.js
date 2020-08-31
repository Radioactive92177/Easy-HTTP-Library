class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // Make an HTTP GET Request
  get(url, callback) {
    this.http.open("GET", url, true);

    // Storing local scope to resolve lexical "this" conflict
    let self = this;

    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback("Error!" + self.http.status);
      }
    };

    this.http.send();
  }
  // Make an HTTP POST Request
  post(url, data, callback) {
    this.http.open("POST", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }
  // Make an HTTP PUT Request
  put(url, data, callback) {
    this.http.open("PUT", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }
  // Make an HTTP DELETE Request
  delete(url, callback) {
    this.http.open("DELETE", url, true);

    let self = this;

    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, "Post deleted!");
      } else {
        callback("Error!" + self.http.status);
      }
    };

    this.http.send();
  }
}
