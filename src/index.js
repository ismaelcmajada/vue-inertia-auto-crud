import AutoCalendar from "./components/AutoCalendar.vue"
import AutocompleteServer from "./components/AutocompleteServer.vue"
import AutoExternalRelation from "./components/AutoExternalRelation.vue"
import AutoForm from "./components/AutoForm.vue"
import AutoFormDialog from "./components/AutoFormDialog.vue"
import AutoTable from "./components/AutoTable.vue"
import DestroyDialog from "./components/DestroyDialog.vue"
import DestroyPermanentDialog from "./components/DestroyPermanentDialog.vue"
import ExpandableList from "./components/ExpandableList.vue"
import ExpandableText from "./components/ExpandableText.vue"
import HistoryDialog from "./components/HistoryDialog.vue"
import LoadingOverlay from "./components/LoadingOverlay.vue"
import RestoreDialog from "./components/RestoreDialog.vue"
import VDatetimePicker from "./components/VDatetimePicker.vue"

const components = [
  AutoCalendar,
  AutocompleteServer,
  AutoExternalRelation,
  AutoForm,
  AutoFormDialog,
  AutoTable,
  DestroyDialog,
  DestroyPermanentDialog,
  ExpandableList,
  ExpandableText,
  HistoryDialog,
  LoadingOverlay,
  RestoreDialog,
  VDatetimePicker,
]

const install = (app, options) => {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component)
    } else {
      console.warn(
        `El componente siguiente no tiene definido el atributo 'name':`,
        component
      )
    }
  })
}
export default {
  install,
}

export {
  AutoCalendar,
  AutocompleteServer,
  AutoExternalRelation,
  AutoForm,
  AutoFormDialog,
  AutoTable,
  DestroyDialog,
  DestroyPermanentDialog,
  ExpandableList,
  ExpandableText,
  HistoryDialog,
  LoadingOverlay,
  RestoreDialog,
  VDatetimePicker,
}
