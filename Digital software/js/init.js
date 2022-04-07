(function($){
    $(function(){
        //Carrusel
        // $(document).ready(function(){
        //     $('.carousel').carousel();
        //   });

        //Slider
        // var instance = M.Carousel.init({
        //     fullWidth: true,
        //     indicators: true
        //   });


        //   $('.carousel.carousel-slider').carousel({
        //     fullWidth: true,
        //     indicators: true
        // });

        //Menu con iconos
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.collapsible');
        //     var instances = M.Collapsible.init(elems, options);
        //   });
        
        //   // Or with jQuery
        
        //   $(document).ready(function(){
        //     $('.collapsible').collapsible();
        //   });


        // Tap Target
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.tap-target');
        //     var instances = M.TapTarget.init(elems, options);
        //   });
        
        //   // Or with jQuery
        
        //   $(document).ready(function(){
        //     $('.tap-target').tapTarget();
        //   });

        //Media
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elems = document.querySelectorAll('.materialboxed');
        //     var instances = M.Materialbox.init(elems, options);
        //   });
        
        //   // Or with jQuery
        
        //   $(document).ready(function(){
        //     $('.materialboxed').materialbox();
        //   });

        //Slider 2
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, options);
          });
        
          // Or with jQuery
        
          $(document).ready(function(){
            $('.slider').slider();
          });
    });
})(jQuery);