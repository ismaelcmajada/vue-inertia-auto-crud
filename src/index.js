import { createApp } from "vue"
import * as components from "./components"
import { vuetify } from "./plugins"

const install = (app) => {
  // Registrar cada componente
  for (const componentKey in components) {
    const component = components[componentKey]
    app.component(component.name, component)
  }

  // Usar Vuetify
  app.use(vuetify)
}

export default { install }
export * from "./components"
