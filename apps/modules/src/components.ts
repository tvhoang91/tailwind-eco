import * as components from '@yaywind/components';

declare global {
  interface Window {
    components: typeof components;
  }
}

window.components = components;
