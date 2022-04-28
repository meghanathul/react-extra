import React from 'react'

const Detail = (props) => {
     console.log(props);
  return (
    <div>
        <div>
            {props.detail.map((elem)=>{
              return(
                <div id="inner_container">
                  <h1>Detail</h1> <br />
              <h2> {elem.name} || {elem.age} || {elem.salary}</h2>
              </div>
              )
            })}
        </div>
    </div>
  )
}

export default Detail
