<template>
  
    <div class="super_container">
	<div class="search">
	<div class="container fill_height">
			<div class="row fill_height">
				<div class="col fill_height">

					<!-- Search Tabs -->

					<div class="search_tabs_container">
						<div class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
							<!-- <div class="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt=""><span>hotels</span></div> 
							<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/bus.png" alt="">car rentals</div> -->
							<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/departure.png" alt="">flights</div>
							<!-- <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/island.png" alt="">trips</div> 
							<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/cruise.png" alt="">cruises</div> 
							<div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt="">activities</div>  -->
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
							<!-- <button class="button search_button" onClick='location.href="offers.html"' @click="q">search<span></span><span></span><span></span></button> 
                 		<center v-if='show == true'>
                    	<div class="block1" v-for="item in flights" v-bind:key="item.id">
                        From:{{item.cityFrom}} <br>
                        To:{{item.cityTo}} <br>
                        fly durations:{{item.fly_duration}} <br>
                        price:{{this.item.price}} <br>
                        routes:{{item.routes}} <br>
                        <br>
                      	<button class="btn" @click="show = false">roll up</button><br><br>
                      
                      <button class="button search_button"  @click="q" >search<span></span><span></span><span></span></button>

 				<router-link to= "/rez/" class="tablinks button search_button" tag="button" @click="q" >
                  SEARCH
              	</router-link>

                    </div>
                  </center>-->
              
            <button class="button search_button"  @click="q" >search<span></span><span></span><span></span></button>
    
               </form>
        </div>
		</div>
		</div>
	</div>
	</div>
<br><br><br><br>
<div class="super_container">
<div class="offers">
		<div class="container">
			<div class="row">
				<div class="col text-center">
					<h2 class="section_title">the best offers with rooms</h2>
				</div>
			</div>
			<div v-if='show == true'>
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
									<div class="offers_price" >{{item.price}}<span></span></div>
									<div class="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div class="offers_icons">
										<ul class="offers_icons_list">
											<li class="offers_icons_item"><img src="images/post.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/compass.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/bicycle.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/sailboat.png" alt=""></li>
										</ul>
									</div>
									<div class="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Offers Item -->
				<!-- <div class="col-lg-6 offers_col">
					<div class="offers_item">
						<div class="row">
							<div class="col-lg-6">
								<div class="offers_image_container">
									Image by Egzon Bytyqi
									<div class="offers_image_background" style="background-image:url(images/offer_2.jpg)"></div>
									<div class="offer_name"><a href="#">turkey hills</a></div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="offers_content">
									<div class="offers_price">$50<span>per night</span></div>
									<div class="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div class="offers_icons">
										<ul class="offers_icons_list">
											<li class="offers_icons_item"><img src="images/post.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/compass.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/bicycle.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/sailboat.png" alt=""></li>
										</ul>
									</div>
									<div class="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				Offers Item
				<div class="col-lg-6 offers_col">
					<div class="offers_item">
						<div class="row">
							<div class="col-lg-6">
								<div class="offers_image_container">
									Image by https://unsplash.com/@nevenkrcmarek
									<div class="offers_image_background" style="background-image:url(images/offer_3.jpg)"></div>
									<div class="offer_name"><a href="#">island dream</a></div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="offers_content">
									<div class="offers_price">$90<span>per night</span></div>
									<div class="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div class="offers_icons">
										<ul class="offers_icons_list">
											<li class="offers_icons_item"><img src="images/post.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/compass.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/bicycle.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/sailboat.png" alt=""></li>
										</ul>
									</div>
									<div class="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				Offers Item
				<div class="col-lg-6 offers_col">
					<div class="offers_item">
						<div class="row">
							<div class="col-lg-6">
								<div class="offers_image_container">
									Image by https://unsplash.com/@mantashesthaven
									<div class="offers_image_background" style="background-image:url(images/offer_4.jpg)"></div>
									<div class="offer_name"><a href="#">travel light</a></div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="offers_content">
									<div class="offers_price">$30<span>per night</span></div>
									<div class="rating_r rating_r_4 offers_rating">
										<i></i>
										<i></i>
										<i></i>
										<i></i>
										<i></i>
									</div>
									<p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
									<div class="offers_icons">
										<ul class="offers_icons_list">
											<li class="offers_icons_item"><img src="images/post.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/compass.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/bicycle.png" alt=""></li>
											<li class="offers_icons_item"><img src="images/sailboat.png" alt=""></li>
										</ul>
									</div>
									<div class="offers_link"><a href="offers.html">read more</a></div>
								</div>
							</div>
						</div>
					</div>
				</div> -->
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

</style>
