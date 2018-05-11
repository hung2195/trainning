 $(document).ready(function(){
 $(".tab-content .tab:first").show();
    $(".tab-control .button").click(function() {
            $(".tab-control .button").removeClass('active');
            $(this).addClass('active');
            $(".tab-content .tab").hide();
            var url=$(this).attr("data-tab");
            $("#"+url).fadeIn();
    
        })
  })