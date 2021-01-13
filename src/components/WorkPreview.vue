<!-- This component adds a WorkPreview to the homepage. -->
<template>
    <div class="work-preview">
        <div class="work-preview__column">
            <img alt="My work picture" src="" />
        </div>
        <div class="work-preview__column">
            <h1>{{ title }}</h1>
            <small>{{ infos }}{{ infos1 }} </small>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A reprehenderit optio hic
                ullam temporibus aperiam consequuntur alias odio cupiditate praesentium maiores,
                ipsa neque? Blanditiis, aperiam placeat. Quasi nihil reprehenderit ab?
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkPreview',
    props: {
        title: {
            type: String,
        },
        infos: {
            type: String,
        },
        infos1: {
            type: String,
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
