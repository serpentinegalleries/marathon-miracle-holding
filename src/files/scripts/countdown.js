var deadline = 'October 8 2016 10:00:00 GMT+0100';

function getTimeRemaining(endtime){
  d = new Date();
  var t = Date.parse(endtime) - Date.parse(d);
  t = t + (d.getTimezoneOffset()*60*1000);
  t = t + (60*60*1000);
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  //var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' Days &amp; ' + t.hours + ' Hours';
    /*if(t.total<=0){
      clearInterval(timeinterval);
    }*/
  //},1000);
}

initializeClock('clockdiv', deadline);

