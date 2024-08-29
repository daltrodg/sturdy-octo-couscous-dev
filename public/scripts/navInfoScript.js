$(function() {
  

  const links = [
    {
      title: "My GitHub Account",
      link: "https://github.com/daltrodg", 
    },
    {
      title: "See The Code",
      link: "https://github.com/daltrodg/musical-octo-India", 
    },
    {
      title: "Page Validity",
      link: "https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fdaltrodg.github.io%2Fspecial-chainsaw-hotel%2F",
      },
      {
    title: "Class GitHub Page",
    link: "https://gist.github.com/barrycumbie/de4aa0fcb0cad79a870305240d726cd0",
    }
  ];

// iterate over the JSON array
$.each(links, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);

$('.nav-dropdown').append($(`<li><a href=" ${item.link} " target ="_blank"> ${item.title} </a></li>`));

});


});
