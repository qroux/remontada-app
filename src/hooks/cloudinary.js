import axios from "axios";

export const fetchSvg = async (url) => {
  // console.log("url =", url);
  const response = await axios.get(url);
  const result = response.data;
  // console.log("result =", typeof result);

  return result;
};
