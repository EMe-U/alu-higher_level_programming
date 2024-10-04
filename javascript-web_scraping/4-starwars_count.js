#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      film.characters.forEach((characterUrl) => {
        if (characterUrl.includes(`/${characterId}/`)) {
          count++;
        }
      });
    });

    console.log(count);
  } catch (parseError) {
    console.error(parseError);
  }
});
