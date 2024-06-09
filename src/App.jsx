import Navbar from './Components/Navbar/Navbar.jsx';
import Main from './Components/Main/Main.jsx';
import "./App.css";
import { useState, useEffect } from 'react';
import Next from './Components/Next/Next.jsx';
const App = () => {

  const accessKEY = import.meta.env.VITE_ACCESS_KEY;
  const [pageNo, setPageNo] = useState(1);
  const [formData, setFormData] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRandom, setIsRandom] = useState(true);
 
  async function displayImages(){
    setLoading(true);
    let apiURL = "";
    if(formData === ""){
        apiURL = `https://api.unsplash.com/photos/random?count=${6}&client_id=${accessKEY}`;
    }else{
        apiURL = `https://api.unsplash.com/search/photos?page=${pageNo}&per_page=${9}&query=${formData}&client_id=${accessKEY}`;
    }
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if(formData === ""){
            setImages((prevImages) => [...prevImages, ...data]); 
        }else{
            if(isRandom)  setImages([]);
            setImages((prevImages) => [...prevImages, ...data.results]);
            setIsRandom(false);
        }
        setLoading(false);
    } catch (error) {
        console.error("Error fetching images", error);
        setLoading(false);
    }
  }

  useEffect(() => {
    displayImages();
  },[pageNo]);
  

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData(value);
  };


  const handleIncrease = () => {
    if (formData === "") {
      setPageNo((prevPageNo) => prevPageNo + 1); 
    } else {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };


  return (
    <>
      <Navbar handleChange={handleChange} formData={formData} displayImages={displayImages} setImages = {setImages}/>
      {loading && <p>Loading...</p>}
      <Main images={images}/>
      <Next handleIncrease={handleIncrease} />
    </>
  );
};

export default App;
