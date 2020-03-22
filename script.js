// an object that stores potential results
const anime = {
    jjba: `JoJo's Bizarre Adventure`, 
    aot: `Attack on Titan`,
    mha: `My Hero Academia`,
    gin: `Gintama`,
    eva: `Evangelion`
}

$(function() {
    // create smooth scrolls //

    // takeQuiz button
    $(`.takeQuiz`).on(`click`, function(e) { 
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("#quiz").offset().top
        }, 1500);
    });

    // takeToInfo button 
    $(`.takeToInfo`).on(`click`, function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("#animeInfo").offset().top
        }, 1000);
    })

    // nextQuestion button 
    $
});