import React from "react";
import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.memes));
  // }, []);

  useEffect(() => {
    const getMeme = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    getMeme();
  }, []);

  function getMemeImage() {
    const rand = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[rand].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMeme((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div className="input">
          <input
            type="text"
            className="form_input"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form_input"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button className="form_button" onClick={getMemeImage}>
          Click to Generate Meme
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
