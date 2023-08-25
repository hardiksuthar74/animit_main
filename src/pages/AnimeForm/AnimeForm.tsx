import { useParams } from "react-router-dom";
import { useSingleAnime } from "../../hooks/useSingleAnime";
import "./AnimeForm.css";
import { useEffect, useState } from "react";

interface animeType {
  mal_id: number;
  title: string;
  image: string;
  type: string;
  episodes: string;
  status: string;
  score: string;
  popular: string;
  season: string;
  year: string;
  synopsis: string;
}

const defaultForm = {
  title: "",
  image: "",
  type: "",
  episodes: "",
  status: "",
  score: "",
  popular: "",
  season: "",
  year: "",
  synopsis: "",
};

const AnimeForm = () => {
  const { animeid } = useParams();
  const [form, setForm] = useState(defaultForm);

  console.log(form);

  const insertAnimeMethod = async (form) => {
    const response = await fetch("http://127.0.0.1:5000/animes/insertAnime", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();

    console.log(data);
  };

  const insertAnime = () => {
    insertAnimeMethod(form);
  };

  const { isLoading, searchedAnime } = useSingleAnime(animeid);

  useEffect(() => {
    if (!isLoading) {
      setForm(searchedAnime);
    }
  }, [isLoading]);

  //   const { displayName, email, password, confirmPassword } = form;

  const anime: animeType = searchedAnime;

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    console.log(form);
  };

  if (isLoading) return <div>Loading......</div>;

  //   const {
  //     image,
  //     title,
  //     synopsis,
  //     episodes,
  //     status,
  //     score,
  //     popular,
  //     season,
  //     year,
  //     type,
  //   } = anime;

  //   console.log(form);
  //   setForm(formData);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>AnimeForm</h1>
      <form className="animeFormContainer">
        <div>
          <label htmlFor="Title">Title: </label>
          <input
            type="text"
            name="title"
            defaultValue={form.title}
            onChange={handleChangeEvent}
          />
        </div>

        <div>
          <label htmlFor="Images">Images: </label>
          <input
            type="text"
            name="image"
            defaultValue={form.image}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Episodes">Episodes: </label>
          <input
            type="Number"
            name="episodes"
            defaultValue={form.episodes}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Status">Status: </label>
          <input
            type="text"
            name="status"
            defaultValue={form.status}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Score">Score: </label>
          <input
            type="Number"
            name="score"
            defaultValue={form.score}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Popular">Popular: </label>
          <input
            type="Number"
            name="popular"
            defaultValue={form.popular}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Season">Season: </label>
          <input
            type="text"
            name="season"
            defaultValue={form.season}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Year">Year: </label>
          <input
            type="Number"
            name="year"
            defaultValue={form.year}
            onChange={handleChangeEvent}
          />
        </div>
        <div>
          <label htmlFor="Type">Type: </label>
          <input
            type="text"
            name="type"
            defaultValue={form.type}
            onChange={handleChangeEvent}
          />
        </div>
      </form>
      <div className="animeFormContainer">
        <label htmlFor="synopsis">Synopsis: </label>

        <textarea
          defaultValue={form.synopsis}
          name="synopsis"
          onChange={handleChangeEvent}
        />
      </div>

      <div className="formSubmitButton">
        <button onClick={insertAnime}>Add To Database</button>
      </div>
    </>
  );
};

export default AnimeForm;
