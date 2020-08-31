/* 
An HTTP libarary for rapid development of API apps and projects
Milestone project from @bradtraversy Javascript course
*/
class EasyHttp {
  constructor() {}

  // GET Request
  get = async (url) => {
    try {
      // Fetching data
      const response = await fetch(url);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return error;
    }
  };

  // POST Request
  post = async (url, data) => {
    try {
      // Sending data
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Receiving reponse
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return error;
    }
  };

  // PUT Request
  put = async (url, data) => {
    try {
      // Sending data
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Receiving reponse
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      return error;
    }
  };

  // DELETE Request
  delete = async (url) => {
    try {
      // Sending data to delete
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      // Creating reponse if deleted
      const responseData = "Resource deleted...";
      return responseData;
    } catch (error) {
      return error;
    }
  };
}
