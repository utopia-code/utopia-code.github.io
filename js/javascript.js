
$(function () { // wait for document ready

    // init
    var controller = new ScrollMagic.Controller();

    controller.addScene([
        scene1,
        scene2,
        scene3,
        scene4,
        scene5,
        scene6
    ]);

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to 1 panel		
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "0%"})
        // animate to 1 panel		
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "0%"})
        // animate to 1 panel		
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "0%"})
        // animate to 1 panel		
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "0%"})

        // animate to 2 panel		
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-12.5%"})
        // animate to 2 panel		
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-12.5%"})
        // animate to 2 panel		
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-12.5%"})
        // animate to 2 panel		
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-12.5%"})
        // animate to 2 panel		
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-12.5%"})
        
        
        // animate to 3 panel	
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-25%"})
        // animate to 3 panel	
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-25%"})
        // animate to 3 panel	
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-25%"})
        // animate to 3 panel	
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-25%"})
        // animate to 3 panel	
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-25%"})

        // animate to 4 panel		
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-37.5%"})
        // animate to 4 panel		
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-37.5%"})
        // animate to 4 panel		
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-37.5%"})
        // animate to 4 panel		
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-37.5%"})
        // animate to 4 panel		
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-37.5%"})

        // animate to 5 panel	
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-50%"})
        // animate to 5 panel	
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-50%"})
        // animate to 5 panel	
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-50%"})
        // animate to 5 panel	
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-50%"})
        // animate to 5 panel	
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-50%"})

        // animate to 6 panel		
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-62.5%"})
        // animate to 6 panel		
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-62.5%"})
        // animate to 6 panel		
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-62.5%"})
        // animate to 6 panel		
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-62.5%"})
        // animate to 6 panel		
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-62.5%"})
        
        
        // animate to 7 panel	
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-75%"})
        // animate to 7 panel	
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-75%"})
        // animate to 7 panel	
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-75%"})
        // animate to 7 panel	
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-75%"})
        // animate to 7 panel	
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-75%"})
        
        // animate to 8 panel		
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 1,   {y: "-87.5%"})
        // animate to 8 panel		
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 1,   {y: "-87.5%"})
        // animate to 8 panel		
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 1,   {y: "-87.5%"})
        // animate to 8 panel		
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 1,   {y: "-87.5%"})
        // animate to 8 panel		
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-87.5%"})

        // animate to grey panel		
        .to("#slideContainer", 1,   {x: "0%"})
        .to("#slideContainer", 1,   {y: "-100%"})
        

    // create scene to pin and link animation
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "4000%"
            })
                .setPin("#pinContainer")
                .setTween(wipeAnimation)
                .addTo(controller);
    
    var tween = TweenMax.to("#svgInfinity", 1, {rotation: 810});

    // build scene
    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#trigger", 
            triggerHook: "0.25",
            duration: 6000
            })
                .setTween(tween)
                .setPin("#svgInfinity", {pushFollowers: false})
                .addTo(controller);


    var laola = new TimelineMax()
    .add(TweenMax.staggerTo("#start h1 span", 0.5, {top: -150, x: -75, scale: 2, color: 'rgba(255,20,20,0.9)' }, 0.2))
    .add(TweenMax.staggerTo("#start h1 span", 0.5, {top: 0, x: 0, scale: 1, color: 'rgba(54,104,154,1)'}, 0.2), 0.5);

        
    // jumping text
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#start", 
        triggerHook: "onCenter",
        duration: 600,
        offset: 1000
        })
            
            .setTween(laola)
            .addTo(controller);


    function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $endfinity = $("path#endfinity");

    // prepare SVG
    pathPrepare($endfinity);

    // build tween
    var tween = new TimelineMax()
        .add(TweenMax.to($endfinity, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
        .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

    // build scene
    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger1", 
        tweenChanges: true,
        triggerHook: "onCenter",
        duration: 500,
        offset: -500
    })
                    .setTween(tween)
                    .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#triggerInit",
        triggerHook: "onEnter",
    })
    // trigger animation by adding a css class
    .setClassToggle("#hero-intro", "scroll")
    .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#triggerInit",
        triggerHook: "onEnter",
    })
    // trigger animation by adding a css class
    .setClassToggle("#mouse-intro", "scroll")
    .addTo(controller);

});
