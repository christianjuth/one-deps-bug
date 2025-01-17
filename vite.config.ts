import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },

      deps: {
        "expo-linear-gradient": {
          "**/*.js": ["jsx"],
        },
      }
    }),
  ],
})
