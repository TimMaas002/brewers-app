import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: './vitest-setup.ts',
      environment: 'happy-dom',
      globals: true,
      coverage: {
        provider: 'v8',
        include: ['src/**/*'],
      },
    },
  }),
)
