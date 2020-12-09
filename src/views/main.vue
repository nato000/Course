<template>
  
    <div class="super_container">
	<div class="search">
	<div class="container fill_height">
			<div class="row fill_height">
				<div class="col fill_height">

					<!-- Search Tabs -->

					<div class="search_tabs_container">
						<div class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">							
							<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/departure.png" alt="">flights</div>
						</div>		
					</div>
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
								<input type="text" class="check_in search_input" placeholder="DD/MM/YYYY" required="required" v-model="date1">
							</div>
							<div class="search_item">
								<div>return</div>
								<input type="text" class="check_out search_input" placeholder="DD/MM/YYYY" required="required" v-model="date2">
							</div>
							<div class="search_item">
								<div>adults</div>
								<!--  -->
								<select name="adults" id="adults_1" class="dropdown_item_select search_input" v-model="adults">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
							</div>
							<div class="search_item">
								<div>children</div>
								<!--  -->
								<select name="children" id="children_1" class="dropdown_item_select search_input" v-model="children">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
							</div>
								<div class="search_item">
								<div>type</div>
								<!--  -->
								<select name="type" id="type" class="dropdown_item_select search_input" v-model="type">
									<option>round</option>
									<option>oneway</option>
								</select>
							</div>
										              
            <button class="button search_button"  @click.prevent="q" >search<span></span><span></span><span></span></button>
    				
               </form>
        </div>
		</div>
		</div>
	</div>
	</div>
<br><br><br><br>
	<div v-if='show == true'>
<div class="super_container">
<div class="offers">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<h2 class="section_title">offers</h2>
				</div>
			</div>
		
			<div class="row offers_items" v-for="item in flights" v-bind:key="item.id">

				<!-- Offers Item -->
				<div class="col-lg-6 offers_col">
					<div class="offers_item">
						<div class="row">
							<div class="col-lg-6">
								<div class="offers_image_container">
									<!-- Image by https://unsplash.com/@kensuarez -->
									<div class="offers_image_background" style="background-image:url(images/offer_1.jpg)"></div>
									<div class="offer_name"><a href="#">{{item.cityFrom}} -> {{item.cityTo}}</a></div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="offers_content">
									<div class="offers_price" >{{item.price}}€<span></span></div>
									<p class="offers_text"></p>
									<p class="offers_text">Fly duration: {{item.fly_duration}} </p>
									<p class="offers_text">Airline: {{item.airlines}} </p>
									<p class="offers_text">Availability: {{item.availability.seats}} </p>
									<p class="offers_text">Bag price: 1:{{item.bags_price}} <br>  </p>
									<div class="offers_icons">
									
									</div>
									<div class="button search_button"><a v-bind:href= "item.deep_link" >Buy</a>
								
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</div>
</div>
</div>
        
         
</template>



<script>
export default {
  name: 'main'
}
</script>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


export default {
  name: 'main',
  data() {
    return{
        flights: [],
        city1:'',
        city2:'',
        date1:'',
        date2:'',
		adults:'',
		children:'',
		type:'',
        air:[],
        show: false
    }
  },
  
  methods: {
    q:function(){
   axios.get('https://api.skypicker.com/locations?term='+this.city1+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
   .then((response) => {
  let cityFrom = response.data.locations[0].code;
  axios.get('https://api.skypicker.com/locations?term='+this.city2+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
   .then((response) => {
    let cityTo = response.data.locations[0].code;
    console.log(cityTo);
    axios.get('https://api.skypicker.com/flights?fly_from='+cityFrom+'&fly_to='+cityTo+'&date_from='+this.date1+'&return_from='+this.date2+'&adults='+this.adults+'&children='+this.children+'&flight_type='+this.type+'&partner=picky')
    .then((response) => {
     console.log(response.data);
     this.flights =  response.data.data.slice(1, 30);
     this.show = true;
    })
   })
   })
}
  }
}
</script>
<style>

</style>
