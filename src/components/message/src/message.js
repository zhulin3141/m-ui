import Vue from "vue";
import MMessage from "./message.vue"

let instance = null;

const Message = function(message, userOptions) {
    userOptions = userOptions || {}

    if (instance) {
        instance.close();
    }

    let MessageConstructor = Vue.extend(MMessage);
    instance = new MessageConstructor({
        propsData: userOptions,
    });
    instance.$slots.default = [message];
    instance.message = message;
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;
}


Message.close = function() {
    instance = null
}

export default Message