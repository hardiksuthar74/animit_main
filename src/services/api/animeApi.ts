const getAllAnimes = async (query: string): Promise<void> => {
  const response = await fetch("http://127.0.0.1:5000/animes/search", {
    method: "POST",
    body: JSON.stringify({ anime: query }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();

  const animeData = data?.data;

  return animeData;
};

const getSingleAnimes = async (query: string | undefined): Promise<void> => {
  const response = await fetch("http://127.0.0.1:5000/animes/singleanime", {
    method: "POST",
    body: JSON.stringify({ animeid: query }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();
  const animeData = data?.data;

  return animeData;
};

export { getAllAnimes, getSingleAnimes };
