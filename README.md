
# Mealfiy - Food API

A brief description of what this project does and who it's for

# Forkify API v1 Documentation

@jonasschmedtman
This is the Forkify API, which replaces the deprecated food2fork API that is shown in the course videos.

Important details:
No need to use CORS proxy or API key
Supports up to 100 requests per hour
Search terms are limited. Search for "pizza" or another meal from this list 🡒 search queries
Only GET requests allowed
Search
Returns a list of recipes for a specific query


## Search

Returns a list of recipes for a specific query


```https://forkify-api.herokuapp.com/
  Path: https://forkify-api.herokuapp.com/api/search

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `Yes` | Query text. For example q=pizza. See the list of all available queries 🡒 search queries |

search queries: https://forkify-api.herokuapp.com/phrases.html

Example URL: https://forkify-api.herokuapp.com/api/search?q=pizza


### Get item
Returns the details about a specific recipe

```http 
Path: https://forkify-api.herokuapp.com/api/get
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rid`      | `yes` | Recipe id. For example rId=47746|

#### add(num1, num2)

Takes two numbers and returns the sum.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#53392b](https://via.placeholder.com/10/53392b?text=+) #53392b |
| Example Color | ![#f1eb90](https://via.placeholder.com/10/f1eb90?text=+) #f1eb90 |
| Example Color | ![#ec8f5e](https://via.placeholder.com/10/ec8f5e?text=+) #ec8f5e |
| Example Color | ![#f3b664](https://via.placeholder.com/10/f3b664?text=+) #f3b664 |

