import React from 'react'

const FrontPageHero = () => {


  function makeMovingSquares(){
    const numberOfSquares = 10;
    let squaresHtml = [];
    let i = 0;

    while (i < numberOfSquares) {
      squaresHtml.push(<div className= {"movingSquare_square movingSquare_square-" + i } ></div>);
      i++;
    }
    return squaresHtml;
  }

  return (
    <div>
      <section class="movingSquares_container">
        <div class="movingSquares_content"><h2 class="movingSquares_content-title"></h2>
          {/* <img src="" > */}
        </div>
        {makeMovingSquares()}
      </section>
    </div>
  )
}

export default FrontPageHero
