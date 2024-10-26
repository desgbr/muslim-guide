import axios from "axios";

export const getRondamAyah = async (ayahNumber: number) => {
  const config = {
    url: `https://api.alquran.cloud/v1/ayah/${ayahNumber}`,
    method: "GET",
  };
  try {
    const req = await axios(config);
    return req?.data;
  } catch (error) {
    return error;
  }
};
