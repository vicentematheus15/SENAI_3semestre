const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // URL base da aplicação — iniciada com `npm start`
    baseUrl: 'http://localhost:3000',

    viewportWidth: 1280,
    viewportHeight: 720,

    // Desativa gravação de vídeo para manter os testes mais rápidos
    video: false,

    // Captura screenshot quando um teste falha
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // Nenhum evento customizado neste projeto introdutório
    },
  },
})
