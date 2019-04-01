<template>
    <div>
        <section class="section__body">
            <h2 class="section__title Example"></h2>
            <slot></slot>
        </section>
        <doc-api :api="api"></doc-api>
    </div>
</template>
<script>
    export default {
        props: ['api'],
        mounted() {
            this.$emit('view', {
                title: `${this.api.title} Component`,
                description: this.api.description,
                keywords: `cdpvue, ${this.api.title}, components`
            });
        }
    };
</script>
