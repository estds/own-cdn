# usertime.js
A jQuery plugin provides to display time in user's timezone.

## Download
[Compress](https://raw.github.com/emn178/usertime.js/master/build/usertime.min.js)  
[Uncompress](https://raw.github.com/emn178/usertime.js/master/src/usertime.js)

## Demo
[Demo](http://emn178.github.io/usertime.js/samples/demo/)

## Installation
You can also install usertime.js by using Bower.

    bower install usertime.js

## Usage
HTML
```HTML
<usertime format="{format}">{time}</usertime>
```

#### *time: `String`*

Render server timestamp or string in any JavaScript Date acceptable format.

#### *format: `String` (default: `YYYY-MM-DD HH:mm:ss`)*

Time format bases on moment. See [moment.format](http://momentjs.com/docs/#/displaying/format/).

### UserTime.DefaultFormat
You can change default format to set up `UserTime.DefaultFormat`.

## Example
HTML
```HTML
<usertime>1441099707112</usertime>
<usertime>2015-09-01T09:28:27+00:00</usertime>
<usertime format="lll">1441099707112</usertime>
```
If a user in time zone GMT+8, he will see:
```HTML
2015-09-01 17:28:27
2015-09-01 17:28:27
Sep 1, 2015 5:28 PM
```
You can change default format:
```JavaScript
UserTime.DefaultFormat = 'MMMM Do YYYY, h:mm:ss a';
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/usertime.js  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
