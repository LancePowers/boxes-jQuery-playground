$(function(){
  // 1. Add an on click handler to the container div.  Console log the x and y position of the click.
    $('div').on('click', function(e){
      console.log("X " + event.pageX + " Y " + event.pageY);
    })
  // 2. Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.
   //Make sure the user won't leave the page after the alert!

   $('.boxType3').append('<a>galvanize</a>')
   $('.boxType3 > a').attr('href', 'www.galvanize.com')
   $('a').on('click', function(e){
     e.preventDefault();
     alert("you can never leave this page.");
     alert("Muahahaha!");
     alert("Muahahaha!");
     alert("Muahahaha!");
     alert("ok, I'm done.")

   })
  // 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.
  // $('.box').on('click',function(e){
  //   $(this).append('<img id="puppy" src="http://t14.deviantart.net/ocgwPD9hMweEjU7ANtpIC27siUU=/fit-in/150x150/filters:no_upscale():origin()/pre01/248b/th/pre/f/2013/148/d/e/cute_puppy_by_kushina_cz-d66vmcz.jpg"/>')
  //
  // })
  // 4. Write a click handler __on the conatainer div__.
    //   The click handler should turn the container background to black and the background of the original
    //  div that was clicked to white.  If the user original div that was clicked happened to be the
    //  container div, change the background of the container div to lime green.
    //  You __should not__ use any selectors for this exercise.  You can do it completely with what is given
    //  to you in the event callback.
  $('#container').on('click', function(e){
    debugger;
    if($('#container') === $(event.target)){
      $('#container').css('background','lime');
      alert('hi');
    } else {
      $(event.target).css('background','white');
      $('#container').css('background', 'black');
    }
  })



////////////////////////////section 1////////////////////////
  //   // 1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"
  // $('#secretBox').css('background', 'white');
  // $('#secretBox').append('<h1>secret box</h1>');
  //   // 2. Find all child divs of the first row.  Set the class for each div to boxType3.
  // $('#row1 > div').removeClass().addClass('box boxType3');
  //   // 3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
  // $('#row1').children().last().hide();
  //   // 4. Change all red boxes to white.
  // $('.boxType1').css('background','white');
  //   // 5. Get the first two divs in the second row.  Take away all styling from the divs.
  // $('#row2 > div:lt(2)').removeClass();
  //   // 6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.
  // $('.box').not('#secretBox').css('width', '2px');
  //   //
});
