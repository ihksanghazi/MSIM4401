<template>
  <ButtonOnOff strToHideShow="Universitas Terbuka"/>
  <ButtonOnOff strToHideShow="Indonesia"/>
</template>

<script>
import ButtonOnOff from './components/ButtonOnOff.vue';

export default {
  name: 'App',
  components:{
    ButtonOnOff
  }
}

</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
} 
</style>