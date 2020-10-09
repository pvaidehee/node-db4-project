exports.seed = function(knex) {
  
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'Manchuria',
          instructions: `1. Cut all the veggies that you want to put in it and blend it all.
          2.Then add all purpose flour in it, add some indo-chinese spices and make small balls of it.
          3. Then shallow fry it.
          4. Then make the machurian gravey and drop the fried balls in it.
          5. Serve them hot.`
        },
        {
          id: 2, 
          name: 'PB&J',
          instructions: `1. Spread peanut butter. 
          2. Spread jelly
          3.Close the fuckin sandwich`
        },
        {
          id: 3, 
          name: 'Chilli Ramen Noodles',
          instructions: `1. Boil water.
          2. Add the noodles.
          3. Pour it in a bowl and sear your mouth because you're an animal who won't wait for it to cool.`
        }
      ]);
    });
};