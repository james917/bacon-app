bacon.directive('btn', function() {

  return {
    restrict: 'C',
    link: function($scope,el,attrs) {
    el.tooltip();
      $("#learn").click(function(){
          window.location = "http://blogs.yu.edu/news/yu-announces-unified-undergraduate-faculty/";
        });


      }
   };

  });
