import React from 'react'

function Commanbanner({imgurl}) {
  return (

    <div className="p-3 d-flex justify-content-center w-100 m-auto" >
    <img src={imgurl} alt="login_img" className="img-fluid " style={{maxHeight:"600px" ,}} />
  </div>
  )
}

export default Commanbanner