import React, {useEffect} from 'react';

// ~~~~~ Create HTML 
function makeMovingLines(){
  const numberOfSquares =12;
  let linesJsx = [];
  let i = 0;
  while (i < numberOfSquares) {
    linesJsx.push(<div key={i} className={"lineAbyss_movingLine lineAbyss_movingLine-" + i } ></div>);
    i++;
  }
  return linesJsx;
}

// ~~~~~ Scroll Handling
function lineAbyssScrollHandler(){
  let currentScrollPosition = window.scrollY;
  var percentageDownPage = percentageOfPageScrolled();

  rotateLinesContainer(percentageDownPage, 60, 36, '-');
  moveLines(currentScrollPosition);
}

// ~~~~~ Animation Functions
function rotateLinesContainer(currentScrollPercentage, targetAngle, doneByPercentage, intPositiveOrNegativeString = ''){
  const linesContainer = document.querySelector('#lineAbyss_linesContainer');
  let percentToComplete = ( currentScrollPercentage / doneByPercentage) ;
  let rotationDegrees = Math.min(percentToComplete * targetAngle, targetAngle);
  linesContainer.style.transform = 'rotate(' + intPositiveOrNegativeString + rotationDegrees + 'deg)';
}

function moveLines(){
  const lines = document.querySelectorAll('.lineAbyss_movingLine');
  const scrollAmountToCompleteAnimation = 150; //px's
  const percentThroughAnimation = window.scrollY % scrollAmountToCompleteAnimation / scrollAmountToCompleteAnimation; //as a decimal
  const exponent = 3;
  const movementHighestExponentResult = Math.pow(lines.length, exponent);
  // console.log('percent through animation: ', percentThroughAnimation, movementHighestExponentResult);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const invertedNumber = invertNumberInRange( i , lines.length ); // make the number we use a count down
    const exponentPercentOfHighest = Math.pow(invertedNumber, exponent) / movementHighestExponentResult;
    const lineMovementLowerBound = exponentPercentOfHighest; // creates an expoential curve
    const lineMovementUpperBound = Math.pow(invertedNumber + 1, exponent) / movementHighestExponentResult;
    const lineMovement = ( lineMovementUpperBound - lineMovementLowerBound ) * percentThroughAnimation + lineMovementLowerBound;
    const left = Math.round(Math.min( lineMovement, 100) * 1000) * 0.1; //put into 1~100 format
    const width = lineMovement * 27;
    // if(i = 1){console.log('left is: ', left, 'width is: ', width)};
    // console.log('left is: ', left, 'width is: ', width)
    line.style.left = left + '%';
    line.style.width = width + 'vmax';
  }
}

// ~~~~~ Utility Functions
function invertNumberInRange( currentNumberInRange, highestNumberInRange){
  return Math.min( Math.abs(highestNumberInRange - currentNumberInRange ) , highestNumberInRange);
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
function percentageOfPageScrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    return pctScrolled;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const LineAbyss = () => {
  useEffect(() => {
    lineAbyssScrollHandler();
    document.addEventListener('scroll', lineAbyssScrollHandler);
  })
  return (
    <div id="lineAbyss_windowFrame">
      <div className="lineAbyss_bg"></div>
      {/* <div id="marker1" style="height:20px; width:20px; background:blue;" ></div> */}

      <div id="lineAbyss_linesContainer">
        {/* <div id="marker2" style="height:20px; width:20px; background:purple;" ></div> */}
        {makeMovingLines()}
      </div>
    </div>
  )
}

export default LineAbyss

