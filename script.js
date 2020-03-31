// an object that stores initial values of potential results
let animeResultValues = {
    jjba: 0,
    aot: 0,
    mha: 0,
    gin: 0,
    eva: 0
}

// an object that stores potential results
const animeResult = {
    jjba: `JoJo's Bizarre Adventure`, 
    aot: `Attack on Titan`,
    mha: `My Hero Academia`,
    gin: `Gintama`,
    eva: `Evangelion`
}

// an object that stores a safePickAnime 
const safePickAnime = {
    hai: `Haikyuu`
}

// user warning element
const userWarning = `<div class="alertUser"><p>Pick an answer please!<p></div>`;

// JQuery doc ready
$(function() {
    // create smooth scrolls 
    // prevent default button and anchor behaviour 
    $(`button`).on(`click`, function(e) {
        e.preventDefault();
    });

    //smooth scroll upon clicking the "take this quiz to find out" button
    $(`a[href^='#']`).click(function (e) {
        e.preventDefault();
        let position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 1000);
    });

    // takeQuiz smooth scroll upon clicking the button
    $(`.takeQuiz`).on(`click`, function() { 
        $('html, body').animate({
            scrollTop: $("#quiz").offset().top
        }, 1500);
    });

    // takeToInfo smooth scroll upon clicking the button
    $(`.takeToInfo`).on(`click`, function() {
        $('html, body').animate({
            scrollTop: $(`#animeInfo`).offset().top
        }, 1000);
    });


    // upon submitting the forms, do the following
    $(`form`).on(`submit`, function (e) {
        // prevent default event of the form
        e.preventDefault();

        // store user input from radio buttons
        const userChoice = $(this).find(`input:radio:checked`).data(`name`);

        // store user input after question submissions
        if (userChoice) {
            // increment value after the user made a choice
            animeResultValues[userChoice]++;
            console.log(animeResultValues);

            // prevent user from multiple submissions
            $(this).find(`input:submit`).prop(`disabled`, true);
            // once input is collected and form submitted, remove the warning
            $(this).find(`.alertUser`).remove();
        } else {
            // if the input submitted is blank, dynamically warn the user
            $(this).append(userWarning);
        }
    });

    // see user's result 
    $(`#seeUserResults`).on(`click`, function() {
        // re-declaring userChoice variable because of the scope
        const userChoice = $(`form`).find(`input:radio:checked`);
        let userResultName = Object.keys(userChoice);

        // testing
        const userResult = `<div class="userQuizResult">Looks like you got ${userResultName}!<p></div>`;

        // statement to calculate the result 
        if (userChoice.length === 5) {
            console.log(this);

            // function to numerically sort an array
            function sortNumber(a, b) {
                return b.animeScore - a.animeScore;
            }

            // convert userChoice object into array 
            const userChoicePropertyKey = Object.keys(animeResultValues);
            const userChoiceArray = userChoicePropertyKey.map(function(propertyKey) {
                return { 
                    valueName: propertyKey,
                    animeScore: animeResultValues[propertyKey]
                };
            });

            // sorting the created array
            userChoiceArray.sort(sortNumber); 

            console.log(userChoiceArray);

            // prevent user from multiple submissions
            $(`#quiz`).find(`.takeToResultBtn`).removeAttr('href');
            $(`#resultSection`).append(userResult);
            // remove the warning if forms are submitted properly
            $(this).find(`.alertUser`).remove();

            // if all scores are equal to 1, insert a safePickAnime 
            if (userChoiceArray[0, 1, 2, 3, 4].animeScore == 1) {
                prompt(safePickAnime.hai)
            }
        } else {
            // if there is not enough input from the user
            $(this).append(userWarning);
        }
    })
});