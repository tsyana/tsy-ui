<template lang="pug">
    doc-view(":api"="api")
        doc-example(src="directives/tooltip/1" title="示例")
</template>

<script>
    import api from './api';

    export default {
        data() {
            return {
                api: api
            };
        }
    };
</script>
