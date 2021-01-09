import {getRandomIdsArray, generateQuestion} from '../../../src/app/logic/generateQuestion'
import { getAnswer } from '../../../src/app/logic/gettingAnswer';

jest.mock('../../../src/app/logic/gettingAnswer');

//-----mocks-----
getAnswer.mockImplementation(jest.fn((mode, id) => {
  let res;
  switch (id) {
    case 1:
      res = id1Response;
      break;
    case 2:
      res = id2Response;
      break;
    case 3:
      res = id3Response;
      break;
    default:
      res = id4Response;
  }
  const data = JSON.stringify(res);
  return Promise.resolve(data);
}));

const getImage = async (mode, id) => {
  return Promise.resolve("base64imagestring");
}
const getAvibleIds = async (mode) => {
  return Promise.resolve([1,2,3,4])
}
//-----------

test('Should have unique indexes', ()=>{
  const randomIds = getRandomIdsArray([11, 21, 32, 44])
  expect(new Set(randomIds).size).toBe(4)
})

test('Correct questions generating', async () => {
  //replace getAnswer, getImage, getAvibleIds methods using mock (?)

  const answers = getAnswer('people', 1);
  // const data = await generateQuestion('people');
  // expect(data.image).toBe("base64imagestring")
  // expect(data.answers).toBe(["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader"]);
  // expect(["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader"].includes(data.rightAnswer)).toBe(true);
})

const id1Response = {
  "name": "Luke Skywalker", 
  "height": "172", 
  "mass": "77", 
  "hair_color": "blond", 
  "skin_color": "fair", 
  "eye_color": "blue", 
  "birth_year": "19BBY", 
  "gender": "male", 
  "homeworld": "http://swapi.dev/api/planets/1/", 
  "films": [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/6/"
  ], 
  "species": [], 
  "vehicles": [
      "http://swapi.dev/api/vehicles/14/", 
      "http://swapi.dev/api/vehicles/30/"
  ], 
  "starships": [
      "http://swapi.dev/api/starships/12/", 
      "http://swapi.dev/api/starships/22/"
  ], 
  "created": "2014-12-09T13:50:51.644000Z", 
  "edited": "2014-12-20T21:17:56.891000Z", 
  "url": "http://swapi.dev/api/people/1/"
}

const id2Response = {
  "name": "C-3PO", 
  "height": "167", 
  "mass": "75", 
  "hair_color": "n/a", 
  "skin_color": "gold", 
  "eye_color": "yellow", 
  "birth_year": "112BBY", 
  "gender": "n/a", 
  "homeworld": "http://swapi.dev/api/planets/1/", 
  "films": [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/4/", 
      "http://swapi.dev/api/films/5/", 
      "http://swapi.dev/api/films/6/"
  ], 
  "species": [
      "http://swapi.dev/api/species/2/"
  ], 
  "vehicles": [], 
  "starships": [], 
  "created": "2014-12-10T15:10:51.357000Z", 
  "edited": "2014-12-20T21:17:50.309000Z", 
  "url": "http://swapi.dev/api/people/2/"
}

const id3Response = {
  "name": "R2-D2", 
  "height": "96", 
  "mass": "32", 
  "hair_color": "n/a", 
  "skin_color": "white, blue", 
  "eye_color": "red", 
  "birth_year": "33BBY", 
  "gender": "n/a", 
  "homeworld": "http://swapi.dev/api/planets/8/", 
  "films": [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/4/", 
      "http://swapi.dev/api/films/5/", 
      "http://swapi.dev/api/films/6/"
  ], 
  "species": [
      "http://swapi.dev/api/species/2/"
  ], 
  "vehicles": [], 
  "starships": [], 
  "created": "2014-12-10T15:11:50.376000Z", 
  "edited": "2014-12-20T21:17:50.311000Z", 
  "url": "http://swapi.dev/api/people/3/"
}

const id4Response = {
  "name": "Darth Vader", 
  "height": "202", 
  "mass": "136", 
  "hair_color": "none", 
  "skin_color": "white", 
  "eye_color": "yellow", 
  "birth_year": "41.9BBY", 
  "gender": "male", 
  "homeworld": "http://swapi.dev/api/planets/1/", 
  "films": [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/6/"
  ], 
  "species": [], 
  "vehicles": [], 
  "starships": [
      "http://swapi.dev/api/starships/13/"
  ], 
  "created": "2014-12-10T15:18:20.704000Z", 
  "edited": "2014-12-20T21:17:50.313000Z", 
  "url": "http://swapi.dev/api/people/4/"
}
