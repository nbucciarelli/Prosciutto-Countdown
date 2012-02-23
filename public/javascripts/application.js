$(document).ready(function() {
  var before="prosciutto."
  var current="Today is prosciutto!"
  var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

  function countdown(yr,m,d){
  theyear=yr;themonth=m;theday=d
  var today=new Date()
  var todayy=today.getYear()
  if (todayy < 1000)
    todayy+=1900
  var todaym=today.getMonth()
  var todayd=today.getDate()
  var todayh=today.getHours()
  var todaymin=today.getMinutes()
  var todaysec=today.getSeconds()
  var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
  futurestring=montharray[m-1]+" "+d+", "+yr
  dd=Date.parse(futurestring)-Date.parse(todaystring)
  dday=Math.floor(dd/(60*60*1000*24)*1)
  dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
  dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
  dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)

  if(dday==0&&dhour==0&&dmin==0&&dsec==1){
    $('#fireworks').toggle();
    return "ZOMG" // document.forms.count.count2.value=current
  }
  else
    return (dday+ " days "+dhour+" hours "+dmin+" minutes and "+dsec+" seconds left until prosciutto.")
  }

  function tick(year, month, day){
    $("#display").html(countdown(year,month,day));
    window.setTimeout( function(){
      tick(year, month, day);
    }, 1000);
  }

  //enter the count down date using the format year/month/day
  var month = $("#hidden_values").data('month');
  console.log(month);
  var day = $("#hidden_values").data('day');
  var year = $("#hidden_values").data('year');
  tick(year, month, day);

});
