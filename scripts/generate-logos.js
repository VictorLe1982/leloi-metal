const fs = require('fs');
const path = require('path');

const primaryPng = fs.readFileSync(path.join(__dirname, '../apps/web/public/brand/leloi-metal/logo-primary.png'));
const whitePng = fs.readFileSync(path.join(__dirname, '../apps/web/public/brand/leloi-metal/logo-white.png'));

const primaryB64 = primaryPng.toString('base64');
const whiteB64 = whitePng.toString('base64');

const primarySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 475" width="1800" height="475">
  <image width="1800" height="475" href="data:image/png;base64,${primaryB64}"/>
</svg>`;

const whiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 475" width="1800" height="475">
  <image width="1800" height="475" href="data:image/png;base64,${whiteB64}"/>
</svg>`;

fs.writeFileSync(path.join(__dirname, '../apps/web/public/brand/leloi-metal/logo-primary.svg'), primarySvg);
fs.writeFileSync(path.join(__dirname, '../apps/web/public/brand/leloi-metal/logo-white.svg'), whiteSvg);

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="none">
  <path d="M16 26H36V66H68V86H16V26Z" fill="#0A2D5B"/>
  <path d="M42 16L62 6V50H92V70H42V16Z" fill="#2F7BFF"/>
  <path d="M36 66L42 70V86H16L16 90H72L68 86H36V66Z" fill="#061D3B" opacity="0.3"/>
  <path d="M62 6L66 9V50L96 53V70H92L62 50V6Z" fill="#1B6BF8" opacity="0.4"/>
</svg>`;
fs.writeFileSync(path.join(__dirname, '../apps/web/public/brand/leloi-metal/logo-mark.svg'), markSvg);

console.log('Successfully created all brand logo assets in apps/web/public/brand/leloi-metal/');
