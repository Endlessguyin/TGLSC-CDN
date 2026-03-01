# TGLSC Game CDN

TGLSC Game CDN is a lightweight content delivery system that allows you to fetch and display games as a hosted library inside your own projects. It provides structured JSON data for games, including metadata, thumbnails, and embed URLs.

## Base Endpoint

https://glseries.net/api/cdn

You may also use other official TGLSC links if you like.

For UBG Creators, it is best if you reverse proxy or proxy the CDN Endpoint & Their Content.

(thumbnail & embed_url)

## Usage

Send a GET request to the CDN endpoint. The API returns structured JSON containing game data.

Example response:

```json
{
  "data": [
    {
      "id": "519788",
      "title": "The Final Earth 2",
      "category": "Sandbox",
      "status": null,
      "type": "game",
      "slug": "the-final-earth-2",
      "thumbnail": "https://glseries.net/assets/img/applications-img/the-final-earth-2.png",
      "embed_url": "https://glseries.net/assets/applications/content/the-final-earth-2/"
    }
  ]
}
```
## Types
- id - The games ID that can be found on TGLSC game list

- title - The games name

- category - The games category type (can also be translated for any existing ones you may have)

- status - The games status type (popular & new only as of now)

- type - The games type (apps & game as of now)

- slug - The games url directory (ex: https://glseries.net/g/havendock/)

- thumbnail - The games icon

- embed_url - The raw game page for the games themselves
