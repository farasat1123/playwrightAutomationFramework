// playwright.config.js
module.exports = {
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      video: 'retain-on-failure',
    },
  };
  