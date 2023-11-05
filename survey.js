const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileData = {};

rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
  profileData.name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    profileData.activity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      profileData.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profileData.favMeal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profileData.favFood = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profileData.FavSport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profileData.SuperPower = answer;

              console.log(`${profileData.name} loves listening to ${profileData.music} while ${profileData.activity}, devouring ${profileData.favFood} for ${profileData.favMeal}, prefers ${profileData.FavSport} over other sports, and is amazing at ${profileData.SuperPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

