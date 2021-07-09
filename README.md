# Coding Challenge

Our core product is primarily built with Vue, Tailwind CSS, and use of APIs. The goal of this challenge helps us understand how quickly you can pick up unfamilar technologies through documentation, learn how you make decisions, and how you implement some fundementals of Vue (such as creating methods, rendering lists, working with reactivity, etc.).

## Instructions

1. Fork this repository
2. When you'd like to submit your code for review, create a pull request to merge into `base repository: winstonproject/coding-challenge-vue-contacts-list | base: main`.
 ![image](https://user-images.githubusercontent.com/498069/124864294-ac0bd380-df86-11eb-82fc-015d3c1f6b50.png)

## Functional Specification

[ x ]  1. When the application loads, use the JavaScript [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) API to perform a `GET` request from the URL `https://randomuser.me/api/?results=50`.
[ x ]  2. Render a list from the results using the "contacts item template" provided in `index.html`.
3. Scan the template for static data that can be replaced with variables containing data from the API response.
[ x ] 4. The "star" icon button:
  * When user clicks, toggle `isFavorite` data property with `boolean` value. Please note that `isFavorite` is not defined in the "contact item" by default.
  * When `isFavorite` is `false`, the button class list should include: `text-gray-400 hover:bg-yellow-100 hover:text-yellow-500`, but not when `isFavorite` is `true`.
  * When `isFavorite` is `true`, the button class list should include: `bg-yellow-400 text-white`, but not when `isFavorite` is `false`.
[ x ] 5. When user clicks the "trash can" icon button, use the JavaScript [`confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) function to prompt user to "confirm" or "cancel" removing the contact from the contact list. If the user confirms, remove the item from the contacts list.

## Example response data:

```JSON
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Madame",
        "first": "Roswitha",
        "last": "Olivier"
      },
      "location": {
        "street": {
          "number": 426,
          "name": "Rue de Gerland"
        },
        "city": "Saas-Fee",
        "state": "Luzern",
        "country": "Switzerland",
        "postcode": 6253,
        "coordinates": {
          "latitude": "-49.0810",
          "longitude": "49.0141"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "roswitha.olivier@example.com",
      "login": {
        "uuid": "dc2307b6-026d-48ed-a5a9-4710ec9bb1f5",
        "username": "organicfish523",
        "password": "pentium",
        "salt": "ky2G51yw",
        "md5": "356bd62a2f8a7165331abe10f0a870da",
        "sha1": "86c9f230453bc619f8701790ed6828af4ea3d813",
        "sha256": "1b6b83fcb4dd2451c6e1772f8f6daf240f39c69d7e4ce99931d7b78ee046a7e4"
      },
      "dob": {
        "date": "1950-10-10T10:28:43.245Z",
        "age": 71
      },
      "registered": {
        "date": "2002-07-31T21:42:37.542Z",
        "age": 19
      },
      "phone": "078 709 39 03",
      "cell": "076 352 94 71",
      "id": {
        "name": "AVS",
        "value": "756.4133.6301.44"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "CH"
    }
  ],
  "info": {
    "seed": "392face8e35ada17",
    "results": 1,
    "page": 1,
    "version": "1.3"
  }
}
```

## Notes

* `index.html` and `app.js` are set up as starter templates for your work.
* Simply load `index.html` in your browser to see your work.
* [Vue documentation](https://vuejs.org/v2/guide/)
