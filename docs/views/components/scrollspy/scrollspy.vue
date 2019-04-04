<template lang="pug">
    doc-view(":api"="api")
        doc-example(src="components/scrollspy/1" title="示例" width="320" height="400")
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
