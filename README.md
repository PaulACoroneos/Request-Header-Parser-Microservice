# API Project: Request Header Parser Microservice for freeCodeCamp

[![Netlify Status](https://api.netlify.com/api/v1/badges/477d67c9-e9bd-49e8-99b4-8b6d8b29c75a/deploy-status)](https://app.netlify.com/sites/request-header-parser-microservice/deploys)

### User stories:
1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:
* https://request-header-parser-microservice.netlify.app/.netlify/functions/server/api/whoami

#### Example output:
* `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
