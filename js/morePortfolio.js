// Isotope
let $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
  //Defult ==> //   columnWidth: '.grid-sizer'
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio_menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//   for portfolio menu active class
$('.portfolio_menu button').on('click',function(event) {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
  event.preventDefault();
});

