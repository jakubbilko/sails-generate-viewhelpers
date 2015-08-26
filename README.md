# sails-generate-viewhelpers
A simple (very simple) service for using express-helpers (https://github.com/mhayashi/express-helpers) in your SailsJs app.

## Installation
Install just like a normal npm package:
```
npm install -g sails-generate-viewhelpers
```
Then run the generator in your project's directory:
```
sails generate viewhelpers
```
And then install the express-helpers package:
```
npm install express-helpers --save
```

## Usage
The service exposes a **vh** object from which you can access the helpers:
* date_tag
* form_tag
* form_tag_end
* hidden_field_tag
* input_field_tag
* link_to
* submit_link_to
* link_to_if
* link_to_unless
* password_field_tag
* select_tag
* single_tag_for
* start_tag_for
* submit_tag
* tag
* tag_end
* text_area_tag
* text_tag
* text_field_tag
* url_for
* img_tag

So if for example you want to use the lin_to helper in your view:
```
<%- vh.link_to('my link title', '/url') %>
```