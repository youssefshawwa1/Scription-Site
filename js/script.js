$(window).on("load", function(){
    // Smooth Scroll
    $('nav ul li a').click(function() {
    
        const thisSectoin = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop:$(thisSectoin).offset().top -150
        },1000, "easeOutCirc"
        );
        return false;
    });

    $(".logo").click(function(){
        $('html, body').stop().animate({
            scrollTop: 0
        },1000, "easeOutCirc");
    });
    // Flexslider
    $('.flexslider').flexslider(
        {
            animation: "slide",               //Boolean: Animate slider automatically 
            animationSpeed: 900, 
            slideshow: false,
            directionNav: !1,
            before: function(){
                $(".cta").css("bottom", "-223px")
            },
            start: function() {
                $(".cta").animate({
                    bottom: "0"
                }, 600, "easeInCirc")
            },
            after: function() {
                $(".cta").animate({
                    bottom: "0"
                }, 600, "easeInCirc")
            }
        }
    );
    // Tabs
    $('#tabs > ul > li > a').click(function(){
        $('#tabs > ul > li > a').css(
            {
                color: "#061923",
                background: "#C8D6AF",
            }
        );
        $(this).css(
            {
                color: "#061923",
                background: "#F7FFEA"
            }
        );
        const thisTab = $(this).attr('href');
        $('#tabs > div:visible').fadeOut(200,"linear", function() {
            $(thisTab).fadeIn(200, "linear");
        });
        

    });

    // Content Rotator
    let counter = 1;

	function contentRotator() {
		$(`#rotator blockquote:nth-child(${counter})`).fadeIn(500, function() {
				if( $(this).is("#rotator blockquote:last-child")) {
					setTimeout(() => {
						$(`#rotator blockquote:nth-child(${counter})`).fadeOut(500, () => {
							counter = 1;
							contentRotator();
						});
						
					}, 5000);
					
				} else {
					setTimeout(() => {
						$(`#rotator blockquote:nth-child(${counter})`).fadeOut(500, () => {
							counter++;
							contentRotator();
						});
						
					}, 5000);
				}
		});
	};
	contentRotator();
    function fading() {
        let t = 1;
        function e() {
            $(`#rotator blockquote:nth-child(${t})`).fadeIn(200, function() {
                $(this).is("#rotator blockquote:last-child") ? setTimeout(function() {
                    $(`#rotator blockquote:nth-child(${t})`).fadeOut(200, function() {
                        t = 1,
                        e()
                    })
                }, 700) : setTimeout(function() {
                    $(`#rotator blockquote:nth-child(${t})`).fadeOut(200, function() {
                        t++,
                        e()
                    })
                }, 700)
            })
        }
    };
    function rotator() {
        // t
        let counter = 1
        // e
        let position = 0;
        //o
      const liLength = $("#features ul:first-of-type li").length;
    //   n
      let clonedUl = $("#features ul:first-of-type").clone();
      $("#features ul:first-of-type li:nth-child(1)").css({
          color: "#FF5964",
          fontWeight: "600"
      }),
      $("#features").append(clonedUl),
      function rotat() {
          setTimeout(function() {
              counter <= liLength ? (position -= 30,
              $("#features").animate({
                  top: position + "px"
              }, 500, function() {
                  $("#features ul:first-of-type li:nth-child(" + (counter + 1) + ")").css({
                      color: "#FF5964",
                      fontWeight: "600"
                  }),
                  counter++,
                  rotat()
              })) : ($("#features ul:first-of-type").remove(),
              clonedUl = $("#features ul:first-of-type").clone(),
              $("#features").css("top", "0"),
              $("#features").append(clonedUl),
              position = 0,
              counter = 1,
              $("#features ul:first-of-type li:nth-child(1)").css({
                  color: "#FF5964",
                  fontWeight: "600"
              }),
              rotat())
          }, 1500)
      }()
    }
    rotator()
    fading() 
});







