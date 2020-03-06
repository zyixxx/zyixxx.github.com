var img = document.getElementById("content");
var monday = document.getElementById("Monday");
var tuesday = document.getElementById("Tuesday");
var wednesday = document.getElementById("Wednesday");
var thursday = document.getElementById("Thursday");
var friday = document.getElementById("Friday");
var saturday = document.getElementById("Saturday");
var sunday = document.getElementById("Sunday");
var cover = document.getElementById("Cover");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var fearofgod = document.getElementById("fearofgod");
var offwhite = document.getElementById("offwhite");
var ralphlauren = document.getElementById("ralphlauren");
var verawang = document.getElementById("verawang");
var versace = document.getElementById("versace");
var burberry = document.getElementById("burberry");
var alexander = document.getElementById("alexander");
var prada = document.getElementById("prada");
var balenciaga = document.getElementById("balenciaga");
var ysl = document.getElementById("ysl");
var gucci = document.getElementById("gucci");
var chanel = document.getElementById("chanel");
var givenchy = document.getElementById("givenchy");




monday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/1.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";

    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        fearofgod.style.display = "inline-block";
        offwhite.style.display = "none";
        ralphlauren.style.display = "none";
        prada.style.display = "none";
        ysl.style.display = "none";
        chanel.style.display = "none";
    });
    
    fearofgod.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        fearofgod.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "inline-block";
        verawang.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "none";
        balenciaga.style.display = "none";
        gucci.style.display = "none";
        givenchy.style.display = "none";
    });
    
    versace.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        versace.style.display = "none";
    }); 
});




tuesday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/2.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    offwhite.style.display = "none";
    fearofgod.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        fearofgod.style.display = "none";
        offwhite.style.display = "inline-block";
        ralphlauren.style.display = "none";
        prada.style.display = "none";
        ysl.style.display = "none";
        chanel.style.display = "none";
    });
    
    offwhite.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        offwhite.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "none";
        verawang.style.display = "none";
        burberry.style.display = "inline-block";
        alexander.style.display = "none";
        balenciaga.style.display = "none";
        gucci.style.display = "none";
        givenchy.style.display = "none";
    });
    
    burberry.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        burberry.style.display = "none";
    }); 
});




wednesday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/3.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        offwhite.style.display = "none";
        fearofgod.style.display = "none";
        ralphlauren.style.display = "inline-block";
        prada.style.display = "none";
        ysl.style.display = "none";
        chanel.style.display = "none";
    });
    
    ralphlauren.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        ralphlauren.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "none";
        verawang.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "inline-block";
        balenciaga.style.display = "none";
        gucci.style.display = "none";
        givenchy.style.display = "none";
    });
    
    alexander.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        alexander.style.display = "none";
    }); 
});




thursday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/4.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        verawang.style.display = "inline-block";
        versace.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "none";
        balenciaga.style.display = "none";
        gucci.style.display = "none";
        givenchy.style.display = "none";
    });
    
    verawang.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        verawang.style.display = "none";
    }); 
});




friday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/5.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        offwhite.style.display = "none";
        fearofgod.style.display = "none";
        ralphlauren.style.display = "none";
        prada.style.display = "inline-block";
        ysl.style.display = "none";
        chanel.style.display = "none";
    });
    
    prada.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        prada.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "none";
        verawang.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "none";
        balenciaga.style.display = "inline-block";
        gucci.style.display = "none";
        givenchy.style.display = "none";
    });
    
    balenciaga.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        balenciaga.style.display = "none";
    }); 
});




saturday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/6.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        offwhite.style.display = "none";
        fearofgod.style.display = "none";
        ralphlauren.style.display = "none";
        prada.style.display = "none";
        ysl.style.display = "inline-block";
        chanel.style.display = "none";
    });
    
    ysl.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        ysl.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "none";
        verawang.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "none";
        balenciaga.style.display = "none";
        gucci.style.display = "inline-block";
        givenchy.style.display = "none";
    });
    
    gucci.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        gucci.style.display = "none";
    }); 
});




sunday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/7.jpeg')";
    img.style.transition = "1s";
    
    c1.style.display = "none";
    c2.style.display = "none";
    setTimeout(function() {
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }, 1000);
    
    fearofgod.style.display = "none";
    offwhite.style.display = "none";
    ralphlauren.style.display = "none";
    verawang.style.display = "none";
    versace.style.display = "none";
    burberry.style.display = "none";
    alexander.style.display = "none";
    prada.style.display = "none";
    balenciaga.style.display = "none";
    ysl.style.display = "none";
    gucci.style.display = "none";
    chanel.style.display = "none";
    givenchy.style.display = "none";
    
    c1.addEventListener('mouseover', function() {
        c1.style.display = "none";
        offwhite.style.display = "none";
        fearofgod.style.display = "none";
        ralphlauren.style.display = "none";
        prada.style.display = "none";
        ysl.style.display = "none";
        chanel.style.display = "inline-block";
    });
    
    chanel.addEventListener('mouseout', function() {
        c1.style.display = "inline-block";
        chanel.style.display = "none";
    }); 

    c2.addEventListener('mouseover', function() {
        c2.style.display = "none";
        versace.style.display = "none";
        verawang.style.display = "none";
        burberry.style.display = "none";
        alexander.style.display = "none";
        balenciaga.style.display = "none";
        gucci.style.display = "none";
        givenchy.style.display = "inline-block";
    });
    
    givenchy.addEventListener('mouseout', function() {
        c2.style.display = "inline-block";
        givenchy.style.display = "none";
    }); 
});




cover.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/0.png')";
    img.style.transition = "1s";
    c1.style.display = "none";
    c2.style.display = "none";
});


