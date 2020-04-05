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
        synopsis: `<p>JoJo's Bizarre Adventure is the story about the Joestar family and its multi-generational conflict with Dio Brando. Each part in the anime follows the life of another member of the Joestar family, tracing their adventures through the generations. It starts with Jonathan Joestar who initiates a rivalry with his adopted brother, Dio Brando. Where will this bizarre adventure take them?</p>`,
        image: `<img src="assets/jjbaInitialImg.png" alt="" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/jjbaSecondaryImg.png" alt="" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/jojos-bizarre-adventure">Watch it here!</a>`
    },
    aot: {
        name: `Attack on Titan`,
        synopsis: `<p>Attack on Titan is set in a dark-fantasy world where the humanity lives inside enormous Walls, which separate the area onto three main regions. Those Walls protect humans from Titans, gigantic humanoid creatures who devour humans presumably without any justifications. Main characters, Eren Jaeger, Mikasa Ackerman and Armin Arlert, witness something horrific at a young age and promise to take their revenge on those gigantic creatures.</p>`,
        image: `<img src="assets/aotInitialImg.png" alt="" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/aotSecondaryImg.png" alt="" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/attack-on-titan">Watch it here!</a>`
    },
    mha: {
        name: `My Hero Academia`,
        synopsis: `<p>Human kind develop special powers known as "quirks". In a present world occupied by people with quirks, Izuku Midoriya, who absolutely adores superhumans, happend to have no such power. Nontheless, the little boy is determined to become a hero and enroll in one of the most prestigious hero academy. After, one might say, lucky incident, Izuku get accepted into the academy where he starts to realize what it means to be a hero.</p>`,
        image: `<img src="assets/mhaInitialImg.png" alt="" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/mhaSecondaryImg.png" alt="" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/my-hero-academia">Watch it here!</a>`
    },
    gin: {
        name: `Gintama`,
        synopsis: `<p>It's mid-nineteenth century and the US fleet should have invaded Japan leading to modernization of the sociopolitical systems and the fall of Shogunate... but that didn't happened. Instead, Japan was invaded by aliens coming down from different parts of universe! The Shogunate became a puppet in the hands of invaders' army, which lead to all samurais being disarmed and reduced to temp workers. Gintama tells us a story about Gintoki, one of the samurais, without any respect for new rules, and he is ready to take any job to survive in these difficult times.</p>`,
        image: `<img src="assets/ginInitialImg.png" alt="" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/ginSecondaryImg.png" alt="" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/gintama">Watch it here!</a>`
    },
    eva: {
        name: `Neon Genesis Evangelion`,
        synopsis: `<p>Earth, 2015, human civilization is devastated by global climate disaster known as Second Impact, which happened fifteen years ago. To general public, it is presented as melting Antarctic ice, when in reality, it is a coverup for giant monsters attacking earth. Those monsters are able to nullify any conventional weapon created by humans with Force Fields. However, the hope isn't lost yet. Some children born after the Second Impact can pilot giant robots that are able to break those Force Fields and kill the invading monsters. But why these giant robots are able to break Force Fields while other weapons can't? And why are those monsters attacking in the first place?</p>`,
        image: `<img src="assets/evaInitialImg.png" alt="" />`,
        secondaryImage: `<img class="secondaryImageEffect" src="assets/evaSecondaryImg.png" alt="" />`,
        linkToWatch: `<a class="watchHereLink" href="https://www.netflix.com/ca/title/81033445">Watch it here!</a>`
    },
}

// an object that stores a safePickAnime 
const safePickAnime = {
    name: `Haikyu!!`,
    synopsis: `<p>Inspired after watching a volleyball ace nicknamed "Little Giant", small Shouyou Hinata relaunches the volleyball club at his middle school. His new team even makes it to a tournament! Unfortunately for them, their first match turns out to be their last when they are viciously crushed by one of the strongest teams. No, not even a team – they get destroyed by the "King of the Court," Tobio Kageyama. Hinata promises to surpass the King no matter what. After middle school is over, Hinata joins Karasuno High School's volleyball team, and he finds that his foe is now his teammate?! Haikyuu!! is a sports comedy with a slice of life that follows two  determined rivaling athletes, their teammates and opponents as Karasuno Volleyball Club tries to make their high school team the best in Japan.</p>`,
    image: `<img src="assets/haiInitialImg.png" alt="" />`,
    secondaryImage: `<img class="secondaryImageEffect" src="assets/haiSecondaryImg.png" alt="" />`,
    linkToWatch: `<a class="watchHereLink" href="https://www.crunchyroll.com/haikyu">Watch it here!</a>`
}

// aesthetic element 
const taDaElement = `<h2><i aria-hidden="true" class="fas fa-star"></i>Ta~Da!<i aria-hidden="true" class="fas fa-star"></i></h2>`;

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

            // prevent user from multiple submissions
            $(this).find(`input:submit`).prop(`disabled`, true);
            // once input is collected and form submitted, remove the warning
            $(`.warning`).find(`.alertUser`).remove();
        } else {
            // if the input submitted is blank, dynamically warn the user
            $(`.warning`).html(userWarning);
        }
    });

    // see user's result 
    $(`#seeUserResults`).on(`click`, function() {
        // re-declaring userChoice variable because of the scope
        const userChoice = $(`form`).find(`input:radio:checked`);
        let userResultName = Object.keys(userChoice);


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
            // const winningScore = userChoiceArray[0].animeScore;
            // access the winning title 
            const resultChoice = animeResult[winningTitle]; 

            // append the winning result and dynamically add it to the DOM
            $(`.result`).html(taDaElement);
            $(`.result`).append(`<h3>You should watch <span class="highlightText">${resultChoice.name}</span>!</h3>`);
            $(`.result`).append(resultChoice.image);
            $(`.result`).append(resultChoice.secondaryImage);
            $(`.result`).append(resultChoice.synopsis);
            $(`.result`).append(resultChoice.linkToWatch);


            // if all scores are equal to 1, insert a safePickAnime 
            if (userChoiceArray[0, 1, 2, 3, 4].animeScore == 1) {
                $(`.result`).html(taDaElement);
                $(`.result`).append(`<h3>You should watch ${safePickAnime.name}!</h3>`);
                $(`.result`).append(safePickAnime.image);
                $(`.result`).append(safePickAnime.secondaryImage);
                $(`.result`).append(safePickAnime.synopsis);
                $(`.result`).append(safePickAnime.linkToWatch);
            } 

            // prevent user from multiple submissions
            $(`#quiz`).find(`.takeToResultBtn`).removeAttr('data-href');
            // remove the warning if forms are submitted properly
            $(`.seeResultsContainer`).find(`.alertUser`).remove();
        } else if (userChoice.length === 4 || userChoice.length === 3 || userChoice.length === 2 || userChoice.length === 1|| userChoice.length === 0) {
            // if there is not enough input from the user
            $(`.resultSectionWarning`).html(userWarning);
        }
    })
});

