import defaultConfig from '@yaywind/configs/src/tailwind/default.config';
import type { Config } from 'tailwindcss';

export default {
  ...defaultConfig,
  content: ['./src/**/*.{ts,tsx}', './node_modules/@yaywind/components/src/**/*.{ts,tsx}'],
} satisfies Config;
