$(document).ready(function(){



var preloader = (function(){

  'use-strict';

  // Vars
  var main = $('.main'),
      btn = $('.enter'),
      page = $('.page');


  return {

    run: function(){
      // show on load
      main.show();
      // apend and prepend html
      main.prepend(this.tmpl.tl + this.tmpl.tr);
      main.append(this.tmpl.bl + this.tmpl.br);
      // on click open site
     this.click_btn();
    },


    tmpl:{
      'tl': '<span class="tl"></span>',
      'tr': '<span class="tr"></span>',
      'bl': '<span class="bl"></span>',
      'br': '<span class="br"></span>'
    },


    click_btn: function(){
      btn.on('click',function(){
        $('.parallax').parallax();
        page.addClass('loaded');
        btn.addClass('hideThis');
        preloader.animations();
      });
    },

    // for firefox i try in css but not work
    animations: function(){
      var tl = $('.loaded .tl'),
          tr = $('.loaded .tr'),
          bl = $('.loaded .bl'),
          br = $('.loaded .br');

      tl.animate({top:'-100%',left:'-100%'},200);
      tr.animate({top:'-100%',left:'100%'},200);
      bl.animate({top:'100%',left:'100%'},200);
      br.animate({top:'100%',left:'-100%'},200);
      btn.remove();
    }
  };
})(jQuery);
$(".fancyHeadline").lettering();


preloader.run();
  });
