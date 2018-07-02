$(document).ready(function(){

    function memory(){
        //tile Constructor function
        function TileItem () {
            this.tile_type;
            this.addToScene = function(front_img, back_img, bio) {
                var tileItem = '<li class="li"><div class="tile" ><div class="left-align tile-front">'+front_img+bio+'</div><div class="left-align tile-back">'+back_img+bio+'</div</div></li>';
                $('.cols').append(tileItem);
            };
        }

        //vars
        var tiles = [];
        var tile = new TileItem();
        var num_tiles = 17;
        var bios =           [
                                    '<h5>Shanksy</h5><p>I like turtles.</p>',
                                    '<h5>Scaristotle</h5><p>CAW, CAW, CAW! </p>',
                                    '<h5>Salty Beach</h5><p>From each according to their ability. To each according to their need to get hit off the track.</p>',
                                    '<h5>Georgia Oh Queef</h5><p>I slept my way to the middle</p>',
                                    "<h5>Snark Chocolate</h5><p>There's no excuse for milk chocolate</p>",
                                    "<h5>Clit</h5><p>America's favorite pasttime</p>",
                                    '<h5>Gnarl Marx</h5><p>A spectre is haunting Roller Derby </p>',
                                    "<h5>Buttz Lightyear</h5><p>To Uranus, and beyond!</p>",
                                    "<h5>Celia Cruise</h5><p>I got a date comin' up, and I might get to mouth base.</p>",
                                    '<h5>Caddy</h5><p>[F]ull of sound and fury,/Signifying nothing.</p>',
                                    '<h5>Slammi Zayn</h5><p>Derby 27:5 says "I just fell on my ass."</p>',
                                    '<h5>Belle of the Brawl</h5><p>The original good girl gone bad.</p>',
                                    '<h5>Dark ‘n’ Stormy</h5><p>Cries through out the entirety of Moana. Will hurt you for suggesting we “make this party a luau”.</p>',
                                    "<h5>Problems</h5><p>I've got problems, you've got problems, Bull City Roller Derby's got problems</p>",
                                    "<h5>Malice in Wonderland</h5><p>Sometimes I'm naked, sometimes I'm not... depends</p>",
                                  "<h5>Thundercat Ho!</h5><p>You took too long. Now yo candy's gone. Thas what happened. P'KAOW! [magic hands]</p>",
                                    '<h5>Carly Slay Jepsen</h5><p>Did you know that A.L.F. never made it back home and instead was experimented on by the US government? Fucked up, right?</p>',
                                    ]
        var front_pictures = [
                                    '<img class="responsive-img" src="media/images/skaters/shanksy.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/salty.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/me2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/lilly.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/clint.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/marx.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/buttz.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/Cruise.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/caddy.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slammi.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/belle.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/darknstormy.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/problems.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/malice.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/thundercat.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slay_real.jpg"</img>',
                                    ];
        var back_pictures = [
                                    '<img class="responsive-img" src="media/images/skaters/shanksy.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/salty.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/me.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/lilly.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/clint2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/marx.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/buttz2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/cruz.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/caddy.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slammi.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/belle.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/stormysquare.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/problems2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/malice.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/thundercat.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slay.jpg"</img>',
                                    ];

        //loop to place tiles with a random id
        for(var p=0; p<num_tiles; p++) {
            tile = new TileItem();
            var id = p;
            var front_img = front_pictures[p];
            var back_img = back_pictures[p];
            var bio = bios[p]
            tile.tile_type = tiles[p];
            tile.addToScene(front_img, back_img, bio);
        }

        //tile click
        function clicked() {
          var picked = $(this);

          flipped = picked.find('.tile').hasClass('flipped')

          if (flipped) {
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