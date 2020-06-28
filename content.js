let clockOn = true;
let zero = false;
let clock = $("<div class='clock' id='clockDisplay'></div>");
let font = $("<link href='https://fonts.googleapis.com/css?family=Nunito:700&display=swap' rel='stylesheet'>");
$('head').append(font);
$('body').prepend(clock);

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let session = 'AM';
  session = (h >= 12) ? "PM" : "AM";
  h = (h == 0) ? 12 : ((h > 12) ? (h - 12): h);

  if (h < 10)
    h = '0' + h;

  if (m < 10)
    m = '0' + m;

  let time = h + ':' + m + ' ' + session;
  document.getElementById('clockDisplay').innerText = time;
  setTimeout(showTime, 60000);
}

showTime();
