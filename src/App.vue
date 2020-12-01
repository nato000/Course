<template>
<div class="main"> 
   <div class="content"> 
        <router-view />
          </div>
         </div>
         
</template>
<script>
export default {
  name: 'App'
}
</script>





  <!-- <div id="app">
    <h1>Weather</h1>
    <center v-if='show == true'>
    <div class="block1" v-for="item in flights" v-bind:key="item.id">
      From:{{item.cityFrom}} <br>
      To:{{item.cityTo}} <br>
      fly durations:{{item.fly_duration}} <br>
      price:{{item.price}} <br>
      routes:{{item.routes}} <br>
      <br>
      <button class="btn" @click="show = false">roll up</button>
      <br><br>
    </div>
    </center>
    <br>
    <div else>
      <input class="btn" type="text"  v-model="city1">
      <input class="btn" type="text"  v-model="city2">
      <br><br><br>
      <input class="btn" type="text"  v-model="date1">
      <input class="btn" type="text"  v-model="date2">
      <button class="btn" @click="p">Add city</button><br> <br>

        <select name="sel" id="sel" v-model="b">
        <option disabled value="">choose</option>
        <option v-for="city in cities" :key="city">{{city}}</option> 

      </select> 
      <br>
      <br>
      <button class="btn" @click="q">Weather</button>
    </div>
  </div> -->







