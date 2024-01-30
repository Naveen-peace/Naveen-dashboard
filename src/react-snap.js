// react-snap.js
const puppeteer = require('puppeteer');

module.exports = {
    // Use puppeteer to generate snapshots
    renderer: puppeteer,
    // Additional options for puppeteer
    puppeteer: {
        // Adjust the timeout as needed
        // timeout: 20000,
    },
    // Use the 'build' directory as the source
    src: './build',
    // Use the 'public' directory as the target
    dist: './public',
    // Add other react-snap options as needed
};
