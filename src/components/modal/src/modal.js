import Vue from "vue";
import MModal from "./modal.vue"

let instance = null;

const Modal = function(cnt, title, userOptions) {
    userOptions = userOptions || {}

    if (instance) {
        instance.handleAction();
    }

    let MessageConstructor = Vue.extend(MModal);
    instance = new MessageConstructor({
        propsData: userOptions,
    });
    instance.title = title;
    instance.message = cnt;
    instance.confirmButtonText = userOptions.confirmButtonText;
    instance.callback = userOptions.callback;

    instance.$mount();

    document.body.appendChild(instance.$el);
    return instance;
}

export default Modal