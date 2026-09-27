<template>
  <nav id="nav">
    <router-link :to="{name:'Awal'}">Awal</router-link> |
    <router-link :to="{name:'Tentang'}">Tentang</router-link>
    <!-- <router-link :to="{name:'Departemen'}">Departemen</router-link> -->
  </nav>
  <router-view/>
</template>