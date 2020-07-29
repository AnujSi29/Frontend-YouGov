# YouGov Test

## Setup

- Install the newest version of Node.js (at least version `12.16.1`)
- Install the newest version of Yarn (at least version `1.22.0`)
- Run `yarn` to install dependencies

## Starting application

- Run `yarn start`, application will be available under `http://localhost:4200/`

## Running tests
- Run `yarn test`

# Task

When you launch the application you will see a list of 15 things alongside their ratings. Please notice that some are being displayed more than once.

In the `entites.service.ts` change the `get()` function so that it returns a list of unique entities, ratings value of which is greater than 50, sorted in descending order by the rating. Furthermore each rating value should be rounded to the nearest integer.

Example:

Given entities:

```js
[
  {
    image: '',
    name: 'Steven Tyler',
    type: 'Music Artist',
    rating: 48.78,
    uuid: 'caefc890-c034-11e1-939f-005056a8759d',
  },
  {
    image: '',
    name: 'Carrie Underwood',
    type: 'Music Artist',
    rating: 60.07,
    uuid: 'bc9a55e1-a904-11e1-9412-005056900141',
  },
  {
    image: '',
    name: 'Steven Tyler',
    type: 'Music Artist',
    rating: 48.78,
    uuid: 'caefc890-c034-11e1-939f-005056a8759d',
  },
]
```

Result:
```js
[
  {
    image: '',
    name: 'Carrie Underwood',
    type: 'Music Artist',
    rating: 60,
    uuid: 'bc9a55e1-a904-11e1-9412-005056900141',
  },
  {
    image: '',
    name: 'Steven Tyler',
    type: 'Music Artist',
    rating: 49,
    uuid: 'caefc890-c034-11e1-939f-005056a8759d',
  },
]
```

Results should be presented in a grid with column gap `30px` and row gap `30px`, justified to the center. Grid should be responsive and it should have max 3 columns (see `grid.png` file in main folder).

## Remarks

- You can't use any libraries like `lodash`
- All tests must pass
- You can't change any tests
- All `tslint` errors must be resolved
- Grid should be displayed correctly on Chrome and Firefox