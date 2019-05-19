<template>
  <div id="app" class='PCwidth'>
    <router-view/>
  </div>
</template>
<script>
export default {
    data () {
        return {
            newKey: 'app'
        }
    },
    mounted () {
        this.$store.commit('changeTime')
    },
    watch:{
        $route(to,from){
            console.log(to)
            this.newKey = to
        }
    }
}
</script>
<style lang="less">
body {
    margin: 0;
}

@media screen and (max-width: 640px) {
    .PCwidth {
        width: 100%;
        margin: auto;
    }
}
@media screen and (min-width: 640px) {
    .PCwidth {
        width: 640px;
        margin: auto;
    }
}
#app {
    
}
</style>
