# guelma map

Mobile-friendly interactive OpenStreetMap map centered on Guelma province, Algeria. Includes province overview, city view, zoom, scale, coordinate popups and optional device geolocation. The overview is a regional view, not an administrative boundary polygon. No account, API key, database or npm dependencies required.

## Run

Install Node.js 22 or later and run `npm start`. Open http://localhost:3000. The server uses Railway's PORT environment variable when present. `/health` returns HTTP 200.

## Railway

Upload these files to the root of a GitHub repository connected to Railway. Deploy that repository into the existing project `guelma map`. Railway uses the included Dockerfile and healthcheck configuration. Generate a public domain once deployment succeeds. HTTPS is required for browser geolocation outside localhost.

Project ID: a7962b2a-417f-4d77-9fa5-63eeca0b15f7
Environment ID: 5a446963-8ac0-4180-b992-aefd5ebe1685

## External services

Leaflet 1.9.4 loads from unpkg.com; map tiles load from tile.openstreetmap.org. Internet access is required. OpenStreetMap attribution is displayed. For large-scale production traffic, arrange a suitable tile provider and follow https://operations.osmfoundation.org/policies/tiles/. Leaflet documentation: https://leafletjs.com/examples/quick-start/.

The app does not transmit location to its own server or persist it. Like other online maps, the tile provider receives tile requests for the viewed region. This is a basic map, with no address search, routing or offline downloads.
