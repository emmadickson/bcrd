$(document).ready(function(){

    function memory(){
        //tile Constructor function
        function TileItem () {
            this.tile_type;
            this.addToScene = function(front_img, back_img, bio) {
                var tileItem = '<li><div class="tile"><div class="tile-front">'+bio+front_img+'</div><div class="tile-back">'+bio+back_img+'</div</div</li>';
                $('.cols').append(tileItem);
            };
        }

        //vars
        var tiles = [];
        var tile = new TileItem();
        var num_tiles = 11;
        var bios =           [
                                    '<h5>Sorry Not Sorry</h5><p>Herp derp derp derpdeederp.</p>',
                                    '<h5>Shanksy</h5><p>I like turtles.</p>',
                                    '<h5>Scaristotle</h5><p>CAW, CAW, CAW! </p>',
                                    "<h5>Buttz Lightyear</h5><p>Your ass is grass, and I'm gonna mow it.</p>",
                                    "<h5>Celia Cruise</h5><p>I got a date comin' up, and I might get to mouth base.</p>",
                                    '<h5>Caddy</h5><p>[F]ull of sound and fury,/Signifying nothing.</p>',
                                    '<h5>Slammi Zayn</h5><p>Derby 27:5 says "I just fell on my ass."</p>',
                                    '<h5>Belle of the Brawl</h5><p>The original good girl gone bad.</p>',
                                    "<h5>Problems</h5><p>I've got problems, you've got problems, Bull City Roller Derby's got problems</p>",
                                    '<h5>Dark ‘n’ Stormy</h5><p>Cries through out the entirety of Moana. Will hurt you for suggesting we “make this party a luau”.</p>',
                                    '<h5>Carly Slay Jepsen</h5><p>Did you know that A.L.F. never made it back home and instead was experimented on by the US government? Fucked up, right?</p>',
                                    ]
        var front_pictures = [
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/StormySquare.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    ];
        var back_pictures = [
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/Stormy.jpg"</img>',
                                    '<img class="circle responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    ];

        //loop to place tiles with a random id
        for(var p=0; p<num_tiles; p++) {
            tile = new TileItem();
            var id = p;
            var front_img = front_pictures[p];
            var back_img = back_pictures[p];
            var bio = bios[p]
            tile.tile_type = tiles[p];
            console.log("hi")
            console.log(bio)
            tile.addToScene(front_img, back_img, bio);
        }

        //tile click
        function clicked() {
          var picked = $(this);

          flipped = picked.find('.tile').hasClass('flipped')
          console.log(picked.find('.tile'))

          if (flipped) {
            console.log('reset');
            picked.find('.tile').removeClass('flipped');
          }
          else{
              picked.find('.tile').addClass('flipped');
          }

        }


        //add event listeners to tiles
        var elements = $('li');
        for(var q=0; q<elements.length; q++){
            elements[q].addEventListener('click',clicked);
        }

    }

    memory();

});

(jQuery);
