# image-to-ico
🚣 Convert your image to ICO format


## install
> npm install --save-dev image-to-ico

## usage
programming usage:
```JavaScript
const fs = require('fs');
const imageToIco = require('image-to-ico');

imageToIco('electron.png',{
  size: [16,16],
  quality: 100,
  greyscale: false
})
  .then(buf => {
    fs.writeFileSync('app.ico', buf);
  })
  .catch(console.error);
```

## options

| option name | description        | required |
| ----------- | ------------------ | -------- |
| size        | set width & height | false    |
| quality     | set JPEG quality   | false    |
| quality     | set greyscale      | false    |


## license
[MIT](LICENSE)
