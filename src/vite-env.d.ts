/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@'
<<<<<<< HEAD

declare module '@cbim-epc-magic/utils'
=======
>>>>>>> 4603f4cdb269f3726905af56ad1db8773ed5b612
