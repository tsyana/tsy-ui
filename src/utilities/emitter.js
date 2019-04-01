function broadcast(componentName, eventName, params) {
    this.$children.forEach((child) => {
        const name = child.$options.componentName;

        if (name === componentName) {
            child.$emit(...[eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat(params));
        }
    });
}

export default {
    methods: {
        dispatch(componentName, eventName, params) {
            let parent = this.$parent;
            let name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName;
                }
            }
            if (parent) {
                parent.$emit(...[eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
};
