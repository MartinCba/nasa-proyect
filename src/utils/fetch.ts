const API_KEY = "mdMugS2cpjRqHVCobBL74yT8heYj3gI1MSvD6azI";
const API_URL = "https://api.nasa.gov/planetary/apod";

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        urlParams?.length > 0 ? `&${urlParams}` : ""
      }`
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
