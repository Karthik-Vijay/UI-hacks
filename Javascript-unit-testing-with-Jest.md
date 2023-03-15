# Unit testing with Jest

## Installation of Jest
Jest can be installed using npm or yarn

npm install jest --save-dev
save to package.json

<img width="606" alt="Screenshot 2023-03-16 at 12 52 46 AM" src="https://user-images.githubusercontent.com/55907622/225420451-3fdcfbdc-eb6d-4cea-acdd-09555e23e794.png">

Add "test" : "jest" for running npm test

## Creating unit test cases with Jest

<img width="1349" alt="Screenshot 2023-03-16 at 1 02 02 AM" src="https://user-images.githubusercontent.com/55907622/225422566-52d1d7d7-e353-499e-ba94-e6e7cc0c1324.png">

## Jest Hooks

### If you have some work you need to do repeatedly for many tests, you can use beforeEach and afterEach hooks.

#### beforeEach(() => {
  initializeCityDatabase();
});

#### afterEach(() => {
  clearCityDatabase();
});

#### test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

#### test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

<img width="1422" alt="Screenshot 2023-03-16 at 1 25 07 AM" src="https://user-images.githubusercontent.com/55907622/225427459-8cd92202-04d9-42b1-841d-651c880fdc04.png">

### In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can't do it inline. Jest provides beforeAll and afterAll hooks to handle this situation.

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});


