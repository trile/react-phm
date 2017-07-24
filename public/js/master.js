// // var icons = new Skycons({"color": "orange"});
// //
// // icons.set("01d", Skycons.CLEAR_DAY);
// // icons.set("01n", Skycons.CLEAR_NIGHT);
// // icons.set("02d", Skycons.PARTLY_CLOUDY_DAY);
// // icons.set("02n", Skycons.PARTLY_CLOUDY_NIGHT);
// // icons.set("03d", Skycons.CLOUDY);
// // icons.set("03n", Skycons.CLOUDY);
// // icons.set("04d", Skycons.CLOUDY);
// // icons.set("04n", Skycons.CLOUDY);
// // icons.set("09d", Skycons.RAIN);
// // icons.set("09n", Skycons.RAIN);
// // icons.set("10d", Skycons.RAIN);
// // icons.set("10d", Skycons.RAIN);
// // icons.set("11d", Skycons.RAIN);
// // icons.set("11n", Skycons.RAIN);
// // icons.set("13d", Skycons.SNOW);
// // icons.set("13d", Skycons.SNOW);
// // icons.set("50d", Skycons.FOG);
// // icons.set("50n", Skycons.FOG);
// //
// // icons.play();
//
//
// var icons = new Skycons({
//     "color": "orange"
//   }),
//   list = [
//     "clear-day", "clear-night", "partly-cloudy-day",
//     "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
//     "fog"
//   ],
//   i;
//
// for (i = list.length; i--;) {
//   var weatherType = list[i],
//     elements = document.getElementsByClassName(weatherType);
//   for (e = elements.length; e--;) {
//     icons.set(elements[e], weatherType);
//   }
// }
//
// icons.play();
