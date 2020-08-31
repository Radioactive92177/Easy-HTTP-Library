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
}