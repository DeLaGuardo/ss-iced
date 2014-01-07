# IcedCoffeeScript (JS) wrapper for SocketStream 0.3

Allows you to use [IcedCoffeeScript](http://maxtaco.github.io/coffee-script/) files (.iced) in your SocketStream project.


### Instructions

Add `ss-iced` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-iced'));
```
