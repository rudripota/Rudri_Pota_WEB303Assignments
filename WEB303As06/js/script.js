//Name: Rudri Pota
//Student number: 0817379

$('.accord-label').on('click',function(e){
    e.preventDefault(); //prevent default function
    let $this = $(this);  //button that we are working for
    $('.accord-panel').each(function(){
        //make sure  that showing class is removed - no
        $this.removeClass('showing');

    })
    //showing the panel that is for the button that we call
    
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panel

    $('.accord-panel').not($this.next()).slideUp();
});

//That's it for accordian 1

$('.accord-label2').on('click',function(e){
    e.preventDefault(); //prevent default function
    let $this = $(this);  //button that we are working for
    $('.accord-panel2').each(function(){
        //make sure  that showing class is removed - no
        $this.removeClass('showing');

    })
    //showing the panel that is for the button that we call
    
    $this.toggleClass('showing');
    $this.next().slideToggle();


    //hide other panel

    $('.accord-panel2').not($this.next()).slideUp();
});

//That's it for accordian 2


//Tabs

//Hide all the panel
$('.tab-panel').hide();

$('#tab1').show(); //default tab 1 show
$('.tab-list li').on('click',function(e){
    e.preventDefault();
    //remove the active class
  $('.tab-list li').removeClass('active');
  //hide the panel
  $('.tab-panel').hide();

  //make li that is active
  $('.tab-panel').addClass('active');
    let panel=$(this).find('a').attr('href');
    $(panel).show();
    return false;
})

$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
    e.preventDefault();                    // Prevent default action of button
    $(this)                                // Get the element the user clicked on
      .next('.accordion-panel')            // Select following panel 
      .not(':animated')                    // If it is not currently animating
      .slideToggle();                      // Use slide toggle to show or hide it
  });