import React from 'react'
import { useDispatch } from 'react-redux'
import { Dog } from '../App';



const DogCard: React.FC<Dog> = (dog: Dog) => {   
    const dispatch = useDispatch();

    const ClickHandler= () => {
        if (dog.message !== "" && dog.status !== "")
        {
            dispatch({ type: "ADD_DOG", payload: {message:dog.message,status:"added"} })
        }  
    }
  return (
      <div className="card" style={{width:200,margin:5}}>
          
          <div className="card-header">
              
           {dog.status!==""? <h5 className="card-title">Lucky Dog!</h5>:<h5 className="card-title">Click Get Dog!</h5>} 
              <p className="card-text">{dog.status}</p>
          </div>
          <div className="card-body">
              <>
              {dog.message===""?null:<img src={dog.message} className="card-img-top" alt="" />}
              </>
          </div>
          <div className="card-footer">
              <>
                {dog.status === "success" ? <button type="button" className="btn btn-info" onClick={ClickHandler}>Add Dog</button> : null}
              </>
          </div>
</div>
  )
}

export default DogCard
