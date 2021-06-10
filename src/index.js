import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let greeting="";
let curDate = new Date();
let curTime = curDate.getHours();
let cssStyle = {};
if(curTime>=1 && curTime<=11){
  greeting="GOOD MORNING!";
  cssStyle.color = "red";
}
else if(curTime>=12 && curTime<=19){
  greeting = "GOOD AFTERNOON!";
  cssStyle.color = "green";
}
else{
  greeting = "GOOD NIGHT!";
  cssStyle.color = "blue";
}

ReactDOM.render(
  <>
    <div>
      <h1> HELLO SURAJ, <span style = {cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);
