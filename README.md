# Resume

My resume as webpage with support for high quality pdf export.


## Dependencies

1. [Node.js](https://nodejs.org)
2. [Chrome](https://www.google.com/chrome/) 59 or higher is required for PDF export using [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)


## Local Environment

```console
git clone git@github.com:ruipinge/resume.git
cd resume
npm install
npm start
```

(or ```npm run start:dash``` to use the [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard))

## Export to PDF

On Linux:
```console
chromium-browser --headless --print-to-pdf="./resume.pdf" http://localhost:3000/index.html
```

On Mac OS:
```console
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --print-to-pdf="./resume.pdf" http://localhost:3000/index.html
```


## Inspiration

- [A List Apart - Printing a Book with CSS: Boom!](http://alistapart.com/article/boom)
- [Smashing Magazine - Designing For Print With CSS](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/)
