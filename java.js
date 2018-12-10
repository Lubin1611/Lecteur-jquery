var Video = $(".player__video").get(0);


$('[title="Toggle Play"]').click(function () {

    var Video = $(".player__video").get(0);



        if (Video.paused) {

            Video.play();


            $('[title="Toggle Play"]').html("||");

        } else {

            Video.pause();

            $('[title="Toggle Play"]').html("►");

        }

});

$('[data-skip="-10"]').click(function () {

    var Video = $(".player__video").get(0);

    Video.currentTime -= 10;

});

$('[data-skip="25"]').click(function () {

    var Video = $(".player__video").get(0);

    Video.currentTime += 25;

});

// barre de progression ?

function update(Video) {

    var duration = Video.duration;    // Durée totale
    var time = Video.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);

    var progress = document.querySelector('.progress__filled');

    //progress.style.width = percent + '%';
    progress.style.flexBasis = percent + '%';

}

// controle du son



