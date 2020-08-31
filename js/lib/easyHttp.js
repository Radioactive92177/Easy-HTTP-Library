class EasyHttp {
  constructor() {}

  // GET Request
  get = async (url) => {
    try {
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
}
