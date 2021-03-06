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
    jjba: {
        name: `JoJo's Bizarre Adventure`,
        synopsis: `JoJo's Bizarre Adventure is a story about the Joestar family and its multi-generational conflict with Dio Brando. Each part in the anime follows the life of another member of the Joestar family, tracing their adventures through the generations. It starts with Jonathan Joestar who initiates a rivalry with his adopted brother, Dio Brando. Further, the plot of each season mainly consists of this current generation Jojo gathering allies, acquiring some kind of supernatural power, fighting enemies on their way, and finally facing the most powerful evil baddie in the whole season. But the main question remains: where will this bizarre adventure take the Joestar family?`,
        image: `<img src="assets/jjbaInitialImg.png" alt="A poster of the Jojo's Bizarre Adventure anime with the first three generations of main characters" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/jjbaSecondaryImg.png" alt="A poster of the Jojo's Bizarre Adventure anime with the first three generations of main characters" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/jojos-bizarre-adventure">Watch it here!</a>`
    },
    aot: {
        name: `Attack on Titan`,
        synopsis: `Attack on Titan is set in a dark-fantasy world where the humanity lives inside enormous Walls, which separate the area onto three main regions aka cities. Those Walls protect humans from Titans, gigantic humanoid creatures who devour humans presumably without any justifications. Main characters, Eren Jaeger, Mikasa Ackerman and Armin Arlert, witness something horrific at a young age and promise to take their revenge on all Titans.`,
        image: `<img src="assets/aotInitialImg.png" alt="A postser of the Attack On Titan anime with three main characters of the series" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/aotSecondaryImg.png" alt="A poster of the Attack On Titan anime with three main characters of the series" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/attack-on-titan">Watch it here!</a>`
    },
    mha: {
        name: `My Hero Academia`,
        synopsis: `Human kind develop special powers known as "quirks". In a present world occupied by people with quirks, Izuku Midoriya, who absolutely adores superhumans, happened to have no such power. Nonetheless, the little boy is determined to become a hero and enroll in one of the most prestigious hero academy. After what some would call a lucky incident, Izuku gets accepted into the academy where he starts to realize what it means to be a hero.`,
        image: `<img src="assets/mhaInitialImg.png" alt="A poster of the My Hero Academia anime with multiple characters from the series" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/mhaSecondaryImg.png" alt="A poster of the My Hero Academia anime with multiple characters from the series" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/my-hero-academia">Watch it here!</a>`
    },
    gin: {
        name: `Gintama`,
        synopsis: `It's mid-nineteenth century and the US fleet should have invaded Japan leading to modernization of the sociopolitical systems and the fall of Shogunate... but that didn't happened. Instead, Japan was invaded by aliens coming down from different parts of the universe! The Shogunate became a puppet in the hands of invaders' armies, which led to all samurais being disarmed and reduced to temp workers. Gintama tells us a story about Gintoki, one of the samurais, who has no respect for new rules but is ready to take any job to survive in these difficult times.`,
        image: `<img src="assets/ginInitialImg.png" alt="A poster of the Gintama anime with multiple characters from the series" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/ginSecondaryImg.png" alt="A poster of the Gintama anime with multiple characters from the series" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/gintama">Watch it here!</a>`
    },
    eva: {
        name: `Neon Genesis Evangelion`,
        synopsis: `Earth, 2015, human civilization is devastated by global climate disaster known as Second Impact, which happened fifteen years ago. To general public, it is presented as melting Antarctic ice, when in reality, it is a coverup for giant monsters attacking earth. Those monsters are able to nullify any conventional weapon created by humans with Force Fields. However, the hope isn't lost yet! Some children born after the Second Impact can pilot giant robots that are able to break those Force Fields and kill the invading monsters. But why these giant robots piloted by children are able to break Force Fields while other weapons can't? And why are those monsters attacking in the first place?`,
        image: `<img src="assets/evaInitialImg.png" alt="A poster of the Neon Genesis Evangelion anime with multiple characters from the series" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/evaSecondaryImg.png" alt="A poster of the Neon Genesis Evangelion anime with multiple characters from the series" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.netflix.com/ca/title/81033445">Watch it here!</a>`
    },
}

// an object that stores a safePickAnime 
const safePickAnime = {
    name: `Haikyu!!`,
    synopsis: `Inspired after watching the Nationals by a volleyball ace nicknamed "Little Giant", small Shouyou Hinata relaunches the volleyball club at his middle school. His new team even makes it to a tournament! Unfortunately for them, their first match turns out to be their last when they are viciously crushed by one of the strongest teams. No, not even a team – they get destroyed by the "King of the Court," Tobio Kageyama. Hinata promises to surpass the King no matter what. After middle school is over, Hinata joins Karasuno High School's volleyball team, and he finds that his foe is now his teammate?! Haikyuu!! is a sports comedy with a slice of life element that follows two determined rivaling athletes, their teammates and opponents as Karasuno Volleyball Club tries to make their high school team the best in Japan.`,
    image: `<img src="assets/haiInitialImg.png" alt="A poster of the Haikyuu anime with multiple characters from the series" />`,
    secondaryImage: `<img class="secondaryImageEffect" src="assets/haiSecondaryImg.png" alt="A poster of the Haikyuu anime with multiple characters from the series" />`,
    linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/haikyu">Watch it here!</a>`
}

// aesthetic element 
const taDaElement = `<i aria-hidden="true" class="fas fa-star"></i>`;

// user warning element
const userWarning = `<div class="alertUser"><p>Pick an answer please!</p></div>`;

// user last warning
const lastWarning = `<div class="alertUser"><p>Please, finish answering the questions!</p></div>`;

// refresh button element
const retakeTheQuiz = `<button class="refreshPage">Retake the quiz!</button>`

// copyright stuff
const notMineArt = `<p class="notMineArt">Please keep in mind that <span>I do not claim any artwork used in the project!</span> All of the pictures have been edited in Photoshop but the original art belongs to their respective owners! Please don't call the FBI on me!</p>`


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
        $("body, html").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });


    // takeQuiz smooth scroll upon clicking the button
    $(`.takeQuiz`).on(`click`, function() { 
        $('html, body').animate({
            scrollTop: $("#question1").offset().top
        }, 1500);
    });

    // takeToInfo smooth scroll upon clicking the button
    $(`.takeToInfo`).on(`click`, function() {
        $('html, body').animate({
            scrollTop: $(`#animeInfo`).offset().top
        }, 1000);
    });

    // submit buttons smooth scroll
    const smoothScroll = function (target) {
        const $scrollElement = $(target);
        $('html, body').animate({
            scrollTop: $scrollElement.offset().top
        }, 1400);
    }


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

            // prevent user from multiple submissions
            $(this).find(`input:submit`).prop(`disabled`, true);

            // once input is collected and form submitted, remove the warning
            $(`.warning`).fadeOut();

            // smooth scroll
            const target = $(this).find(`input:submit`).data(`scroll`);
            smoothScroll(target);
        } else {
            // if the input submitted is blank, dynamically warn the user
            $(this).find(`.warning`).html(userWarning);
            $(`.warning`).hide();
            $(`.warning`).fadeIn();
        }
    });

    // see user's result 
    $(`#seeUserResults`).on(`click`, function() {
        // re-declaring userChoice variable because of the scope
        const userChoice = $(`form`).find(`input:radio:checked`);

        // statement to calculate the result 
        if (userChoice.length === 5) {
            // convert received userChoice object into array 
            const userChoicePropertyKey = Object.keys(animeResultValues);
            const userChoiceArray = userChoicePropertyKey.map(function (propertyKey) {
                return {
                    valueName: propertyKey,
                    animeScore: animeResultValues[propertyKey]
                };
            });

            // function to numerically sort an array
            function sortNumber(a, b) {
                return b.animeScore - a.animeScore;
            }
            userChoiceArray.sort(sortNumber); 

            // get the winning anime title from the array 
            const winningTitle = userChoiceArray[0].valueName;

            // access the winning title 
            const resultChoice = animeResult[winningTitle]; 
            
            // append the winning result and dynamically add it to the DOM
            $(`.resultWrapper`).html(`
                <div class="resultBox">
                    <div class="additionalEffect">
                        <h2>${taDaElement}Ta~Da!${taDaElement}</h2>
                    </div>
                    <div class="resultTitle"><h2> You should watch <span class= "highlightText"> ${resultChoice.name}</span>!</h2></div>
                    <div class="resultContent">
                        <div class="resultPicture">
                            <div class="mainPicture">${resultChoice.image}</div> 
                            <div class="secondPicture">${resultChoice.secondaryImage}</div>
                        </div>
                        <div class="resultText">
                            <p>${resultChoice.synopsis}</p>
                            <div class="resultButtons">
                                ${resultChoice.linkToWatch}
                                ${retakeTheQuiz}
                            </div>
                            ${notMineArt}
                        </div>
                    </div>
                </div>
            `);

            // if all scores are equal to 1, insert a safePickAnime 
            if (userChoiceArray[0, 1, 2, 3, 4].animeScore == 1) {
                $(`.resultWrapper`).html(`
                <div class="resultBox">
                    <div class="additionalEffect">
                        <h2>${taDaElement}Ta~Da!${taDaElement}</h2>
                    </div>
                    <div class="resultTitle"><h2> You should watch <span class= "highlightText"> ${safePickAnime.name}</span>!</h2></div>
                    <div class="resultContent">
                        <div class="resultPicture">
                            <div class="mainPicture">${safePickAnime.image}</div> 
                            <div class="secondPicture">${safePickAnime.secondaryImage}</div>
                        </div>
                        <div class="resultText">
                            <p>${safePickAnime.synopsis}</p>
                            <div class="resultButtons">
                                ${safePickAnime.linkToWatch}
                                ${retakeTheQuiz}
                            </div>
                            ${notMineArt}
                        </div>
                    </div>
                </div>
            `);
            } 

            // refresh button functionality
            $(`.refreshPage`).on(`click`, function () {
                location.reload(true);
                $(`html, body`).scrollTop(0);
            }); 

            // smooth scroll
            const target = $(`#resultSection`);
            smoothScroll(target);

            // prevent user from multiple submissions
            $("#seeUserResults").attr("disabled", true);
            // remove the warning if forms are submitted properly
            $(`.resultSectionWarning`).fadeOut();
        } else if (userChoice.length <=4) {
            // if there is not enough input from the user
            $(`.resultSectionWarning`).hide();
            $(`.resultSectionWarning`).fadeIn();
            $(`.resultSectionWarning`).html(lastWarning);
        }
    })
});

