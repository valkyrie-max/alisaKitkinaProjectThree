//                                          ***** PSEUDO CODE; ANIME QUIZ RECOMMENDATION *****
//                                                    Alisa Kitkina | Cohort 26
//                                                 WHAT ANIME SHOULD YOU WATCH? 👀
//
// 1.   Setup the database in a JS object as strings to store the possible recommendations to provide in the end of the quiz;
//          • possible recommendations include (TBU):
//                  – Sailor Moon;
//                  – Cowboy Beebop;
//                  – JJBA;
//                  – Naruto;
//                  – AoT;
//                  – Tokyo Ghoul;
//                  – BNHA;
//                  – Ergo Proxy;
//                  – Ghost in Shell;
//                  – Melancholy of Haruhi Suzumiya; 
//                  – Monogatari Series;
//                  – Princess Mononoke; 
//                  – Evangelion;
//          • (possibly) create an object within an object to separate data into major categories, for instance: 
//                  – by length (how many episodes);
//                  – by type (movie/series);
//                  – by status (finished/ongoing);
//                  – by major genre (fantasy, sci-fi, slice of life, etc.);
// 2.   A landing page with the name of the quiz ("What Anime Should You Watch?") followed by:
//          • a definition of the word "anime";
//          • couple of reasons why it's great (!important!)!; 
// 3.   A button taking the user to the first/next question of the quiz to maximize UX; 
//          • listen to the button click in order to relocate the user further down from the landing page;
//          • this action is performed through the rest of the quiz; 
//          • questions have four options to choose from, thus providing enough data for further calculation;
//                  – each option has a value that varies from 1 to 4 respectively; 
// 4.   Create a function that prevents the user from leaving the questions blank and still getting the result;
//          • if (any option isn't clicked), then (prompt the user to make their choice(!wisely!));
//          • else (proceed to the next question);
// 5.   Store user's choices (data) in a variable;
// 6.   Calculate collected data by using Math. function (? maybe something else ?);
// 7.   Provide the user with the result based on the calculations by pulling it from the object storing possible outcomes (refer to the first step for more info); 
//          • the result may include:
//                  – name of the series/movie;
//                  – number of episodes;
//                  – short synopsis; 
//                  – an image/gif from the said anime/movie; 
// 8. After the result has been provided, allow the user to click another button in order to retake the quiz, should that be their desire; 
//           • listen to the button click in order to refresh the website and take them back to the landing page; 
// 
//          NOTES for future Alisa: 
//                  – what about a loop? is there a way you could include it to the project?
//                  – look into how to properly save values in variables and calculate them correctly without any hiccups;
//                  – ASK QUESTIONS!!!