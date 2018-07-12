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
        var num_tiles = 24;
        var bios =           [
                                    '<h5>Shanksy</h5><p>I like turtles.</p>',
                                    '<h5>Scaristotle</h5><p>CAW, CAW, CAW! </p>',
                                    '<h5>Salty Beach</h5><p>From each according to their ability. To each according to their need to get hit off the track.</p>',
                                    '<h5>Georgia Oh Queef</h5><p>I slept my way to the middle</p>',
                                    "<h5>Snark Chocolate</h5><p>There's no excuse for milk chocolate</p>",
                                    "<h5>Clint</h5><p>The n is silent</p>",
                                    '<h5>Hellvetica Bold</h5><p></p>',
                                    '<h5>Duchess von Blocker</h5><p></p>',
                                    '<h5>JammaWockee</h5><p>Why push through life when you can dance through it? </p>',
                                    '<h5>M.C Jamma</h5><p>My pants are finer than your pants</p>',
                                    '<h5>Riot</h5><p></p>',
                                    '<h5>Yinz Blader Ginsburg</h5><p></p>',
                                    '<h5>Shruggernaut</h5><p></p>',
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
                                    '<img class="responsive-img" src="media/images/skaters/shanksy1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/salty1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/queef1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/lilly.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/clint1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/hell1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/duchess1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/jamma1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/mc1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/riot1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/yinz1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/shrug1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/marx.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/buttz1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/Cruise.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/caddy1.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slammi.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/belle1.JPEG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/stormy1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/problems1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/malice.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/thundercat1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slay1.jpg"</img>',
                                    ];
        var back_pictures = [
                                    '<img class="responsive-img" src="media/images/skaters/shanksy2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/scari.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/salty2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/queef2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/lilly.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/clint2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/hell2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/duchess2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/jamma2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/mc2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/riot1.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/yinz2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/shrug2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/marx.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/buttz2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/cruz.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/caddy2.JPG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slammi.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/belle2.JPEG"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/stormy2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/problems2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/malice.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/thundercat2.jpg"</img>',
                                    '<img class="responsive-img" src="media/images/skaters/slay2.jpg"</img>',


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
