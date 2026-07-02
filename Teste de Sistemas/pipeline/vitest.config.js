import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Roda os testes de forma determinística (sem watch) no CI.
    environment: 'node',
    include: ['tests/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.js'],
    },
  },
})
