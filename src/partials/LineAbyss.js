import React, {useEffect} from 'react';

const sectionsAndColors ={
  "Codeexcerpts": "#ED6C25",
  "Designexcerpts": "#862bdb",
  "Randomexcerpts": "#31da39",
  "Projectsexcerpts": "#33ced6",
}

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
  // let currentScrollPosition = window.scrollY;
  const doc = document.documentElement;
  const currentScrollPosition = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  const percentageDownPage = percentageOfPageScrolled();
  rotateLinesContainer(percentageDownPage, 60, 36, '-');
  moveLines(currentScrollPosition);
  changeColorsOnNewSection(sectionsAndColors, currentScrollPosition);
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

function changeColorsOnNewSection(sectionsAndColors, currentScrollPosition){
  const bgElem = document.querySelector('#lineAbyss_bg');
  let colorChanged = false;

  Object.keys(sectionsAndColors).map((sectionName)=>{
    const targetElem = document.querySelector(`#${sectionName}`);
    if(targetElem){
      // console.log(`${sectionName} majority of screen?, ${isElemMajorityOfViewport(targetElem, currentScrollPosition)}, `);
      if( isElemMajorityOfViewport(targetElem, currentScrollPosition) ){
        // bgElem.style.backgroundColor = sectionsAndColors[sectionName];
        bgElem.classList = 'lineAbyss_bg-' + sectionName;
        // console.log('winning color bg! for ', sectionName);
        colorChanged = true;
      }
    }
  });
  // if(! colorChanged ){
  //   bgElem.classList = '';
  // }
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

function isElemMajorityOfViewport(elem, currentScrollPosition){
  const elemRect = elem.getBoundingClientRect();
  // console.log(`${elem.id}: ${ elemRect.top} < ${currentScrollPosition + (window.innerHeight / 1.9)} && ${(elemRect.top + elemRect.height)} - ${(currentScrollPosition + window.innerHeight)} > 0 )}`);

  // if( elemRect.top < currentScrollPosition + (window.innerHeight / 1.9) 
  // && (elemRect.top + elemRect.height) - (currentScrollPosition + window.innerHeight) > 0 ){


  // console.log(`${elem.id}: ${ elemRect.top - (window.innerHeight * 0.66)} < 0 && ${(elemRect.top + elemRect.height)} > ${(window.innerHeight * 0.5)} )}`);

  if( elemRect.top < (window.innerHeight * 0.66) //top of elem above halfway point of viewport 
  && (elemRect.top + elemRect.height) > (window.innerHeight * 0.5 ) ){  // bottom of elem below halfway point of viewport
    // console.log(elem, 'is majority of viewport');
    return true
  }else{return false}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const LineAbyss = () => {
  useEffect(() => {
    lineAbyssScrollHandler();
    document.addEventListener('scroll', lineAbyssScrollHandler);
  })
  return (
    <div id="lineAbyss_windowFrame">
      <div id="lineAbyss_bg"></div>
      {/* <div id="marker1" style="height:20px; width:20px; background:blue;" ></div> */}

      <div id="lineAbyss_linesContainer">
        {/* <div id="marker2" style="height:20px; width:20px; background:purple;" ></div> */}
        {makeMovingLines()}
      </div>
    </div>
  )
}

export default LineAbyss

