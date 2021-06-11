import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greeting="";
let greet="";
let curDate = new Date(2021,6,6,23);
let curTime = curDate.getHours();
let cssStyle = {};
if(curTime>=1 && curTime<=11){
  greeting="GOOD MORNING!";
  cssStyle.color = "purple";
  greet="Have a Nice Day!"
}
else if(curTime>=12 && curTime<=19){
  greeting = "GOOD AFTERNOON!";
  cssStyle.color = "green";
  greet="All the Best!"
}
else{
  greeting = "GOOD NIGHT!";
  cssStyle.color = "blue";
  cssStyle.textAlign = "center"
  greet="Sweet Dreams!"
}

ReactDOM.render(
  <>
    <div className="greetingdiv">
      <h1> HELLO SURAJ, <span style = {cssStyle}>{greeting}<br/><div>{greet}</div></span></h1>
    </div>
  </>,
  document.getElementById('root')
);
