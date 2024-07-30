import { GIF_API_KEY } from "./constants/variables";

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}=${category}&limit=5`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_large.url
  }));

  return gifs;
};