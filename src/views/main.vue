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
					<input id="input_1" type="text" class="from search_input" placeholder="From" autocomplete="on" v-model="city1">
				</div>
				<div class="search_item">
					<div>to</div>
					<input id="input_2" type="text" class="to search_input" placeholder="To" autocomplete="on" v-model="city2">
				</div>

				<div class="dpicker">
					<div class="switch_pos">
						<input type="checkbox" id="switch" @click="toggleCheckbox();" /><label class="switch" for="switch">Toggle</label>
					</div>
					<div v-if='check == true'>
								<!-- <div v-show="visible"> 
									 v-on:click="visible=!visible"-->
						<div class="round">
							<div class="switch_name_1">Return</div>
							<el-date-picker
							v-model="value2"
							type="daterange"
							range-separator="To"
							start-placeholder="Start date"
							end-placeholder="End date"
							format="dd/MM/yyyy"
      						value-format="dd/MM/yyyy">
							</el-date-picker>
						</div>
					</div>
					<div v-if='check == false'>
						<!-- <div v-show="!visible"> -->
						<div class="oneway">
						    <div class="switch_name_2">Oneway</div>
							<el-date-picker
      						v-model="value1"
      						type="date"
      						placeholder="Pick a day"
							format="dd/MM/yyyy"
      						value-format="dd/MM/yyyy">
    						</el-date-picker>
						</div>
					</div>
				</div>

				<div class="search_item">
					<div>adults</div>
		
					<select name="adults" id="adults_1" class="dropdown_item_select search_input"  v-model="adults">
						<option selected>0</option>
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
						<option selected>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
					</select>
				</div> 
					<div v-if='err == true'>		              
                	<div class="error_alert">{{this.errors[0]}}</div>	 
					</div>
							
               		<input id="clickMe" class="button search_button" type="button" value="search" @click.prevent="checkForm($event);q();" />

			</form> 
        </div>
	</div>
	</div>
	</div>
</div>     



<!-- <div class="super_container"> -->
		
<div class="offers">
	<div class="container">

		<div v-if='loading == true'>
			<div class="load"><img id="loading" src="/images/lod.png" ></div>
		</div> 

	<div v-if='show == true'>
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
						<!-- Image by https://unsplash.com/@kensuarez 
						 -->
						<div class="offers_image_background" style="background-image:url(images/offer_1.jpg)"></div>
						<div class="offer_name"><a href="#">{{item.cityFrom}} -> {{item.cityTo}}</a></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="offers_content">
						<div class="offers_price" >{{item.price}}€<span></span></div>
						
						<p class="offers_text"></p>
						<p class="offers_text">Fly duration: {{item.fly_duration}} </p>
						<p class="offers_text">Airline: <img :src="`https://images.kiwi.com/airlines/32x32/${item.airlines[0]}.png`" alt="">		
						
						</p>
						
						<p class="offers_text">Availability: {{item.availability.seats}} seat(s) </p>
						<p class="offers_text">
						<table>
							<tbody>
								<tr>
									<td>Bag price: </td>
									<td> 1 pc: {{item.bags_price[1]}}</td>
								</tr>
								<tr>
									<td></td>
									<td> 2 pcs: {{item.bags_price[2]}}</td>
								</tr>
							</tbody>
						</table>
						</p>
						<div class="offers_icons">
						
						</div>
						<div class="button search_button"><a v-bind:href= "item.deep_link" target="_blank">Buy</a>
					
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
       	adults:'',
		children:'',
		type:'',
		errors:[],
		a:'',
		g:'',
		value1: '',
		value2: '',
		err:'',
		checkbox:'',
		check:'',
		swType:'',
		visible: true,
		code:null,
        loading: false,
		logo: [],
        images: [],
		air:[],
        show: false
    }
  },
 
  methods: {

	checkForm:function(e){
	  if(this.city1 && this.city2 && !this.value1 ) return true;
      	 this.errors = [];
       	if(!this.city1 || !this.city2 || !this.value1 ) 
	   		{
	    		this.loading = false 
				alert("Complete all fields")
	    	}	
         else 
	  	{ 
	  		 this.loading = true;
	  	};
	  e.preventDefault();		
	},

	toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
	  	if (this.checkbox === false)
	  		{
				this.swType = null
				this.swType = '&date_from='+this.value1+'&date_to='+this.value1+'&flight_type=oneway';
	  			this.check = false;
	  		}
	 	else if (this.checkbox === true)
	  		{
				this.swType = null
				this.swType = '&date_from='+this.value2[0]+'&return_from='+this.value2[1]+'&date_to='+this.value2[0]+'&return_to='+this.value2[1]+'&flight_type=round';
				this.check = true;
			}
    },
		
    q(){	
		console.log(this.value1);	
		console.log(this.value2);
		
		axios.get('https://api.skypicker.com/locations?term='+this.city1+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
		.then((response) => {
		let cityFrom = response.data.locations[0].code;
		console.log("city1 code ok");
		axios.get('https://api.skypicker.com/locations?term='+this.city2+'&locale=en-US&location_types=city&limit=10&active_only=true&sort=name')
		.then((response) => {
			let cityTo = response.data.locations[0].code;
			console.log("city2 code ok");
		if (this.checkbox === false)
	 	 	{
				this.swType = null
				this.swType = '&date_from='+this.value1+'&date_to='+this.value1+'&flight_type=oneway';
	  		}
	 	else if (this.checkbox === true)
	  		{
				this.swType = null
				this.swType = '&date_from='+this.value2[0]+'&return_from='+this.value2[1]+'&date_to='+this.value2[0]+'&return_to='+this.value2[1]+'&flight_type=round';
			}
			axios.get('https://tequila-api.kiwi.com/v2/search?fly_from='+cityFrom+'&fly_to='+cityTo+this.swType+'&adults='+this.adults+'&children='+this.children,
						{
							headers: {
							// 'apikey': 'xIQNuKsL0SichgTkWbmBQjGSF0YRSdC_',
							'apikey': 'jXj7GghihEr_64qu8qEBo6FjDLbmGePf',
							}
						}
					)
				.then((response) => {
				console.log("search get ok");
				// console.log(response.data.data[0].airlines);
				// this.images.push(response.data.data[0].airlines.slice(0, 30));
				// this.images = response.data.data.airlines
			  	// this.images = this.data.data.map(dataSet => dataSet[0].airlines);
				// console.log(this.images);
				

			this.flights =  response.data.data.slice(0, 30);
			console.log(this.flights);
			this.show = true;
			this.loading = false;
			
			})
      })
	 })
	},
	


  mounted() {
	//   new google.maps.places.Autocomplete(
	// 	  document.getElementById("input_1")
	//   )
	//   new google.maps.places.Autocomplete(
	// 	    document.getElementById("input_2")
	//   )
  },
 
  }
  }

</script>
