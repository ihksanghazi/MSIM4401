<template>
    <p v-if="compoShowHide">{{ strToHideShow }}</p>
    <button @click="onOff">{{ aksi }}</button>
</template>

<script>
    export default {
        name: 'ButtonOnOff',
        data () {
            return {
                aksi: 'sembunyikan',
                terlihat: true
            }
        },
        props:{
            strToHideShow: String
        },
        computed:{
            compoShowHide() {
                if (this.terlihat === true){
                    return true
                }else{
                    return false
                }
            }
        },
        methods: {
            onOff() {
                if (this.aksi === 'sembunyikan'){
                    this.aksi = 'tampilkan'
                    this.terlihat = false
                }else{
                    this.aksi = 'sembunyikan'
                    this.terlihat = true
                }
            }
        }

    }
</script>

<style scoped>
button{
    color: #42b983;
}
</style>