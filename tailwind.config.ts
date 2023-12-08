import toolConfig from '@yaywind/configs/src/tailwind/tool.config';
import type { Config } from 'tailwindcss';

export default {
  ...toolConfig,
  content: ['apps/**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}'],
} satisfies Config;
