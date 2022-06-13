import MButton from "./components/button/src/button.vue";
import MButtonGroup from "./components/button/src/button-group.vue";
import MInput from "./components/input/src/input.vue";
import MAccordion from "./components/accordion/src/accordion.vue";
import MAccordionItem from "./components/accordion/src/accordion-item.vue";
import Message from "./components/message/src/message.js";
import MTab from "./components/tabs/src/tabs.vue";
import MTabHead from "./components/tabs/src/tabs-head.vue";
import MTabItem from "./components/tabs/src/tabs-item.vue";
import MTabPanel from "./components/tabs/src/tabs-panel.vue";
import MTable from "./components/table/src/table.vue";
import MTableColumn from "./components/table/src/table-column.vue";
import MModal from "./components/modal/src/modal.js";

const components = {
    MButton,
    MButtonGroup,
    MInput,
    MAccordion,
    MAccordionItem,
    Message,
    MTab,
    MTabHead,
    MTabItem,
    MTabPanel,
    MTable,
    MTableColumn,
    MModal,
}

export default {
    install(app) {
        for (let c in components) {
            app.component(c, components[c])
        }

        app.prototype.$message = Message
        app.prototype.$alert = MModal
    }
}