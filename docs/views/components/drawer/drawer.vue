<template lang="pug">
    doc-view(":api"="api")
        doc-example(src="components/drawer/1" title="示例" width="320" )
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
