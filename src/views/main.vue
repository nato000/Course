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
								<div>Date</div>
									<el-date-picker
									v-model="value1"
									type="daterange"
									range-separator="To"
									start-placeholder="Start date"
									end-placeholder="End date"
									format="dd/MM/yyyy"
      								value-format="dd/MM/yyyy">
								</el-date-picker>

							</div>

						 <div class="search_item">
								<div>adults</div>
								
								<select name="adults" id="adults_1" class="dropdown_item_select search_input"  v-model="adults">
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
								
								<select name="type" id="Type" class="dropdown_item_select search_input" v-model="type">
									<option value="round">round</option>
									<option value="oneway">oneway</option>
								</select>
								 <span id="r" v-bind="a"></span>
							</div> 
										              
                		<input id="clickMe" class="button search_button" type="button" value="search" @click.prevent="_Func();q();" />		 
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
		a:'',
		g:'',
		value1: '',
       
        air:[],
        show: false
    }
  },
 
  methods: {
    q(){
		axios.get('https://api.skypicker.com/locations?term='+this.city1+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
		.then((response) => {
		let cityFrom = response.data.locations[0].code;
		axios.get('https://api.skypicker.com/locations?term='+this.city2+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
		.then((response) => {
			let cityTo = response.data.locations[0].code;
			console.log(cityTo);
			axios.get('https://api.skypicker.com/flights?fly_from='+cityFrom+'&fly_to='+cityTo+'&date_from='+this.value1[0]+'&return_from='+this.value1[1]+'&adults='+this.adults+'&children='+this.children+'&flight_type='+this.type+'&partner=picky'+this.g)
			.then((response) => {
			console.log(response.data);
			this.flights =  response.data.data.slice(1, 30);
			console.log(this.flights);
			this.show = true;
			})
		})
		})
	},
	_Func() {
		if (this.type === "round"){
			this.g = '&nights_in_dst_from='+8+'&nights_in_dst_to='+8;
			console.log(this.g);
		}
		else {
			this.g = '';
			console.log(this.g);
		}
		}
  },
  mounted() {
// var select = document.querySelector('select')
// select.addEventListener('change',_Func)
// $("_Func").click(_Func);
  },
 
} 
</script>
