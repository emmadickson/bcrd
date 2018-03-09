$(document).ready(function(){

    function memory(){
        //tile Constructor function
        function TileItem () {
            this.tile_type;
            this.addToScene = function(id, front_img, back_img) {
                var tileItem = '<li id="'+id+' data-type="'+this.tile_type+'"><p>testttt</p><div class="tile"><div class="tile-front">'+front_img+'</div><div class="tile-back">'+back_img+'</div</div</li>';
                $('.tiles').append(tileItem);
            };
        }

        //vars
        var tiles = [];
        var tile = new TileItem();
        var num_tiles = 16;
        var front_pictures = [
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    '<img src="../media/images/skaters/scari.jpg"</img>',
                                    ];
        var back_pictures = [
                                    '<img src="https://i.imgur.com/oTxUcRw.jpg"</img>',
                                    '<img src="https://i.imgur.com/IDHEiz2.jpg"></img>',
                                    '<img src="https://i.imgur.com/ONsXQ9a.jpg"></img>',
                                    '<img src="https://i.imgur.com/sPbp3pp.jpg"></img>',
                                    '<img src="https://i.imgur.com/cZHeXQy.jpg"></img>',
                                    '<img src="https://i.imgur.com/SUFRnQT.jpg"></img>',
                                    '<img src="https://i.imgur.com/3IAM1pP.jpg"></img>',
                                    '<img src="https://i.imgur.com/jIIfUw7.jpg"></img>',
                                    '<img src="https://i.imgur.com/oTxUcRw.jpg"</img>',
                                    '<img src="https://i.imgur.com/IDHEiz2.jpg"></img>',
                                    '<img src="https://i.imgur.com/ONsXQ9a.jpg"></img>',
                                    '<img src="https://i.imgur.com/sPbp3pp.jpg"></img>',
                                    '<img src="https://i.imgur.com/cZHeXQy.jpg"></img>',
                                    '<img src="https://i.imgur.com/SUFRnQT.jpg"></img>',
                                    '<img src="https://i.imgur.com/3IAM1pP.jpg"></img>',
                                    '<img src="https://i.imgur.com/jIIfUw7.jpg"></img>',
                                    ];

        //loop to place tiles with a random id
        for(var p=0; p<num_tiles; p++) {
            tile = new TileItem();
            var id = p;
            var front_img = front_pictures[p];
            var back_img = back_pictures[p];
            tile.tile_type = tiles[p];
            tile.addToScene(id, front_img, back_img);
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

        function resetGame(){
            alert("Congratulations! You took "+attempts+" attempts to complete.");
            $('.tiles').children().remove();
            memory();
        }
    }

    memory();

});

(jQuery);
