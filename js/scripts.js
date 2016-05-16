// My Scripts


//Read More

$('article').readmore({
  speed: 1000,
  lessLink: '<a href="#">Read less</a>'
});


//Random image

var img0 = 'img/Img%201.jpg';

var img1 = 'img/Img%202.jpg';

var img2 = 'img/Img%203.jpg';

var img3 = 'img/Img%204.jpg';

var img4 = 'img/Img%205.jpg';

var img5 = 'img/Img%207.jpg';



var ranNum = Math.floor(Math.random()*6);

$('img').attr('src', eval('img' + ranNum));


//Lettering

$('.header').lettering('lines');
 