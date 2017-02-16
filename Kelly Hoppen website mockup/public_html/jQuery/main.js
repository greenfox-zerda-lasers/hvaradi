(function(){
    
    //JavaScript on
    $description=$('aside').insertBefore('header').hide();
    $button=$('a.button');
    //hide-show 'ABOUT ME'
    $button.on('click', function(e){
       e.preventDefault();
       $description.slideToggle(500,function(){
           $button.text(($button.text()==='Close')?'About us':'Close');
           }); 
    });
    
    // call prettyPhoto plugin
    $("a[rel^='prettyPhoto']").prettyPhoto();


})();