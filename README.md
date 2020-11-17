# Express Mondogb URL Shortener Microservice

[Heroku Link](https://url-tinyfy.herokuapp.com/)


Use the following command to run this project locally.

```bash
npm run start
```

A MongoDB needs to be set up along with .ENV file providing database details as follows

```bash
DBUSER="username"
DBPASS="password"
DBDETAILS="database:port/databasename"
```
## Live Project Usage

Server is live and listening to POST requests at
```bash
https://url-tinyfy.herokuapp.com/api/shorten
```
The body of the POST request must contain
```
{
   url: "https://url.to/shorten"
}
```
The Response would be as
```json
{
   "url": "https://url.to/shorten",
   "short": "string"
}
```

the url ```https://url.to/shorten``` would then be accessible as a short url:
```bash
https://url-tinyfy.herokuapp.com/string
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
