import React from 'react'

const Mainbodyitems = (props) => {
  return (
    <div className='moviebox'>
     
      <div className="cards">
        <img src={props.movies.imageUrl} alt="" />
        {/* <h5>{props.movies.movieName}</h5> */}

      </div>
    </div>
  )
}

export default Mainbodyitems
