import axios from "axios";

const BASE_URL = "https://staging.thunderscript.com/api";

export const fetchAllProperties = async () => {
  const res = await axios.get(`${BASE_URL}/properties`);
  return res.data;
};

export const searchProperties = async (query) => {
  const res = await axios.get(`${BASE_URL}/properties`, {
    params: { search: query },
  });
  return res.data;
};
