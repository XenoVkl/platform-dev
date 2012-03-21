jQuery(function($){
    
	$(document).ready(function() {  //Once the page elements are fully loaded
   
    /* News slider */
      //init
    $('.view-news > .view-content').addClass('news_content tab-content');
    $('#slider .news_list li:first-child').addClass('active');
    $('#slider .news_content div.news').first().show();
    
    //browse top news
    var topNews = new Array();
    $('#slider .news_list li a').each(function() {
      topNews.push($(this));
    });
    
      /*var NbNews = topNews.length;
      var i = 1;
      var interval = setInterval(function() {
        if (i >= NbNews) {
          i = 0;
        }

        changeNews(topNews[i]);
        i++;
      },2000);
    
    $('#slider').on('mouseenter',clearInterval(interval));
    $('#slider').on('mouseleave',function() {
      var interval = setInterval(function() {
        if (i >= NbNews) {
          i = 0;
        }

        changeNews(topNews[i]);
        i++;
      },2000);    
    });*/
    
    
    $('#slider .news_list li a').click(function(e) {
      e.preventDefault();
      changeNews($(this));
      return false;
    });
    
    function changeNews(clicked) {
      var previous_id = '';
      
      $('#slider .news_list li a').each(function() {
        var previous_parent = $(this).parent('li');
        if (previous_parent.is('.active')) {
          previous_parent.removeClass('active');
          previous_id = $(this).attr('href').replace('#', '');
        }
      });
      
      clicked.parent('li').addClass('active');
      
      var news_id = clicked.attr('href').replace('#', '');
      $('#'+previous_id).hide();
      $('#'+news_id).fadeIn(500);
    }    

    /*$('.carousel').carousel({
    interval: 4000
    })*/
    /* /News slider */
	});

}); 