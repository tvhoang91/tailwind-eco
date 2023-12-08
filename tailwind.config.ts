import defaultConfig from '@yaywind/configs/src/tailwind/default.config';
import type { Config } from 'tailwindcss';

export default {
  ...defaultConfig,
  content: ['apps/**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}'],
} satisfies Config;
