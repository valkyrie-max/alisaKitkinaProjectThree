//                                          ***** PSEUDO CODE; ANIME QUIZ RECOMMENDATION *****
//                                                    Alisa Kitkina | Cohort 26
//                                                 WHAT ANIME SHOULD YOU WATCH? 👀
//
// 1.   Setup the database in a JS object as an object to store the possible recommendations to provide in the end of the quiz;
//          • result recommendations include:
//                  – JJBA;
//                  – AoT;
//                  – MHA;
//                  – Gintama;
//                  – Evangelion;
//          • give each anime a value in order to calculate the score in the end; 
// 2.   A landing page with the name of the quiz ("What Anime Should You Watch?") followed by:
//          • a definition of the word "anime";
//          • couple of reasons why it's great!; 
// 3.   A button taking the user to the first/next question of the quiz to maximize UX; 
//          • listen to the button click in order to relocate the user further down from the landing page;
//          • this action is performed through the rest of the quiz; 
//          • questions have five options to choose from, thus providing enough data for further calculation;
// 4.   Create a function that prevents the user from leaving the questions blank and still getting the result;
//          • if (any option isn't clicked), then (prompt the user to make their choice);
//          • else (proceed to the next question);
// 5.   Save the values from the inputs into variables;
// 6.   Use collected values to get a single anime title; 
//          • create a variable to calculate the score; 
// 7.   Display and provide the result to the user by dynamically adding HTML to the DOM;
//          • the result may include:
//                  – name of the series/movie;
//                  – short synopsis; 
//                  – an image/gif from the said anime/movie; 
//                  – link to watch it
// 8. After the result has been provided, allow the user to click another button in order to retake the quiz, should that be their desire; 
//           • listen to the button click in order to refresh the website and take them back to the landing page; 