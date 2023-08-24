const getAllAnimes = async (query: string): Promise<void> => {
  console.log(query);

  const response = await fetch("http://127.0.0.1:5000/animes/search", {
    method: "POST",
    body: JSON.stringify({ anime: query }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json();

  console.log(data);

  return data?.data;
};

const getSingleAnimes = async (): Promise<void> => {
  const response = await fetch("");

  const data = await response.json();

  return data;
};

export { getAllAnimes, getSingleAnimes };
