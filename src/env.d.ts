/// <reference types="vite/client" />

// interface IntrinsicElements {
//   'button': UnscopedEmitHelper.Button;
// }

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
