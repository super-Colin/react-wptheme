import React from 'react'

const FrontPageHero = () => {


  function makeMovingSquares(){
    const numberOfSquares = 10;
    let squaresJsx = [];
    let i = 0;
    while (i < numberOfSquares) {
      squaresJsx.push(<div key={i} className={"movingSquare_square movingSquare_square-" + i } ></div>);
      i++;
    }
    return squaresJsx;
  }
  

  return (
    <div className="movingSquares_container" >
        <div className="movingSquares_content">
        <h2 className="movingSquares_content-title"></h2>
          {/* <img src="" > */}
        </div>
        {makeMovingSquares()}
    </div>
  )
}

export default FrontPageHero
