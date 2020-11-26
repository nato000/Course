<template>
  <div id="app">
    <div class="search_panel active">
						<form action="#" id="search_form_1" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
              <div class="search_item">
								<div>from</div>
								<input type="text" class="from search_input" placeholder="From" required="required" v-model="city1">
							</div>
							<div class="search_item">
								<div>to</div>
								<input type="text" class="to search_input" placeholder="To" required="required" v-model="city2">
							</div>
							<div class="search_item">
								<div>Departure</div>
								<input type="text" class="check_in search_input" placeholder="YYYY-MM-DD" required="required" v-model="date1">
							</div>
							<div class="search_item">
								<div>return</div>
								<input type="text" class="check_out search_input" placeholder="YYYY-MM-DD" required="required" v-model="date2">
							</div>
							<div class="search_item">
								<div>adults</div>
								<select name="adults" id="adults_1" class="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
								</select>
							</div>
							<div class="search_item">
								<div>children</div>
								<select name="children" id="children_1" class="dropdown_item_select search_input">
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
								</select>
							</div>
							<button class="button search_button" @click="q" onClick='location.href="offers.html"'>search<span></span><span></span><span></span></button>
              
    
    
					        <center v-if='show == true'>
                    <div class="block1" v-for="item in flights" v-bind:key="item.id">
                        From:{{item.cityFrom}} <br>
                        To:{{item.cityTo}} <br>
                        fly durations:{{item.fly_duration}} <br>
                        price:{{item.price}} <br>
                        routes:{{item.routes}} <br>
                        <br>
                      <button class="btn" @click="show = false">roll up</button><br><br>
                      
                    </div>
                  </center>
            </form>
          </div>
         </div>
</template>



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

<script>

import axios from 'axios'

export default {
  name: 'App',
  data() {
    return{
        flights: [],
        city1:'',
        city2:'',
        date1:'',
        date2:'',
    
        air:[],
        show: false
    }
  },
  
  methods: {
    q:function(){
    axios.get('https://api.skypicker.com/flights?fly_from='+this.city1+'&fly_to='+this.city2+'&date_from='+this.date1+'&return_from='+this.date2+'&partner=picky')
      .then((response) => {
        console.log(response.data);
        this.flights =  response.data.data.slice(1, 10);
        this.show = true;
      })
  },
  }
}
</script>

<style>
#app {
  font-size: 110%;
  text-align: center;
  color: #000000;
  margin-top: 100px;
     } 

select{
  font-size: 120%;
  width: 6%;
}
.block1 { 
 width: 300px; 
 background: rgb(172, 172, 172);
 padding: 5px;
 border: solid 1px black; 
}

.btn{
  font-size: 120%;
  background:rgb(212, 212, 212);
}
</style>
