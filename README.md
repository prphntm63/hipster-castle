# Hipster Castle Brewing

This repo is a work in progress for my personal brewing website. Readme will be used for ideas and concepts for the time being.

### FE structure

- Home
  - "On tap at a glance"
- Taplist
- Recipe Archive
  - Sessions
  - Printable

### Database Structure

- App Constants
  - Keg Tare
- Users
  - Login with Google?
- Recipes
  - WrittenBy (FK Users)
  - ImageURL
  - BeerJSON / BeerXML file import?
- Sessions
  - BrewedBy (FK Recipes)
  - Brew Date
  - Mash pH
  - Pre Boil OG
  - OG
  - FG
  - Notes
- Taps (timescale?)
  - Timestamp
  - Temperature
  - Pressure(?)
  - Raw weight
- Fermenters (timescale?)
  - Timestamp
  - iSpindel data
- Link Sessions / Taps
  - Session (FK Sessions)
  - Fermenter (FK Fermenter)
- Link Sessions / Fermenters
  - Session (FK Sessions)
  - Fermenter (FK Fermenter)
