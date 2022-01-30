Technical task for Front-End Developer
CREATE A LOGIN PAGE FOR ORTEX.COM
We would like to see a good looking login page for ortex.com, you can use any CSS or JS library. Showing of some skills
in react.js would be ideal.
Requirements
• The page should render well on mobile and desktop resolutions.
• The page should contain a login form with a login button which posts the username and password to /login
• There should be a reset password option and clicking it should show a modal with the relevant fields.
• Somewhere on the page you should show the latest price and the latest timestamp (in local time for the
user) for the EUR/USD exchange rate from a websocket feed.
o The feed can be accessed by sending “{"topic": "subscribe", "to": "EURUSD:CUR"}” to
ws://stream.tradingeconomics.com/?client=guest:guest
o ‘dt’ is the timestamp as UTC and ‘price’ is the latest price.
• The deliverable is a set of files that can be opened as a local webpage.    