import React from 'react'
import { DogState } from '../App'
import DogCard from './DogCard'
import { useSelector } from "react-redux";
import './DogList.css';

const DogList = () => {
      const dogList = useSelector((state: DogState) => state.reducer.dogs);

  return (
    <div className='doglistcontainer'>
          {dogList.map((dog) => {
          return <DogCard key={dog.message} message={dog.message} status={dog.status}/>
      })}
    </div>
  )
}

export default DogList
