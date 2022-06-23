import React, {  useEffect, useState } from "react";
import axios from 'axios';
import DogCard from "./components/DogCard";
import { useDispatch, useSelector } from "react-redux";
import DogList from "./components/DogList";

export interface Dog{
  message: string
  status: string
}
export interface DogState{
  reducer: {
    dogs:Dog[], dog:Dog    
  }
}
const initDog ={
  message : "",
  status : ""
}
function App() {
  const [dog, setDog] = useState<Dog>(initDog);
  const [loading, setLoading] = useState<boolean>(false);
  const randomDog = useSelector((state: DogState) => state.reducer.dog);
  const dispatch = useDispatch();
  const getDogHandler = () => {
    setLoading(true)
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((dogfromax) => {
        dispatch({ type: "GET_DOG", payload: dogfromax.data })
        setLoading(false)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {   
    setDog({ message: randomDog.message, status: randomDog.status })
  },[randomDog])

  return (
    <div className="App" style={{margin:10}}>
      <button type="button" className="btn btn-primary" onClick={getDogHandler}>Get Dog!</button>
      <>
        {loading?<h1>Dog is coming...</h1>:<DogCard message={dog.message} status={dog.status} />}
      </>
      <DogList />
    </div>
  );
}

export default App;