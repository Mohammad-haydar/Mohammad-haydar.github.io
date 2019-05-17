
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 90
      },
      900
    );
  }
});



// var todo=[
//   "clean room !",
//   "brush teeth !",
//   "exercisse !",
//   "study javascript !",
//   "eat healthy !"
// ];

// for (var i=0 ; i< todo.length ; i++){

// }












