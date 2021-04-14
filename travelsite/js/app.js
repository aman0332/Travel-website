journey_data = [
			{
				type: 'review',
				name: 'Recong Peo',
				location: '',
				time: '2 month ago',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupijourney_datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				bottom_text: '<span class="fa fa-star text-warning"></span><span> 120 people found this review helpful</span>',
				img_url: 'img/dummy.png', 
			},
			{
				type: 'comment',
				name: 'Recong Peo',
				location: '',
				time: '2 month ago',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupijourney_datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				bottom_text: '<span class="fa fa-heart text-warning"></span><span> 12 likes</span>',
				img_url: 'img/dummy.png', 
			},
			{
				type: 'recommend',
				name: 'Kaza',
				location: 'Spiti Valley, Himachal Pradesh',
				time: '2 month ago',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.officia deserunt mollit anim id est laborum.',
				bottom_text: '',
				img_url: 'img/dummy-image.jpg', 
			},
			{
				type: 'follow',
				name: 'Sakshi Goel',
				location: 'New Delhi, India',
				time: '2 month ago',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
				bottom_text: '',
				img_url: 'img/dummy-image.jpg', 
			}
		]

review_data = [
				
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				}
			]

trip_data = [
				
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				},
				{
					name: 'Recong Peo',
					time: '2 months ago'
				}
			]

function render_journey_data(){
	var type_text, journey_inner_html, journey_html, journey_start_html;
	for (var i = 0; i < journey_data.length; i++) {

		if(journey_data[i].type == 'review'){
			type_text = '<span class="pl-2">Reviewed <b>'+journey_data[i].name+'</b></span>';

			journey_inner_html = '<div class="row">'+
				  			'<div class="col-lg-12 mt-2">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100px">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100px">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100px">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100px">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100px">'+
				  			'</div>'+
				  			'<div class="col-lg-12 mt-2">'+
				  				'<p>'+journey_data[i].text+'</p>'+
				  			'</div>'+
				  			'<p class="pl-3 mb-0">'+
				  				journey_data[i].bottom_text+
				  			'</p>'+
				  		'</div>';
		}
		else if(journey_data[i].type == 'comment'){
			type_text = '<span class="pl-2">Commented on '+journey_data[i].name+'<b> review</b></span>';

			journey_inner_html = '<div class="row">'+
				  			'<div class="col-lg-12 mt-2">'+
				  				'<p>'+journey_data[i].text+'</p>'+
				  			'</div>'+
				  			'<p class="pl-3 mb-0">'+
				  				journey_data[i].bottom_text+
				  			'</p>'+
				  		'</div>';
		}
		else{
			if(journey_data[i].type == 'recommend'){
				type_text = '<span class="pl-2">Recommended <b>'+journey_data[i].name+'</b></span>';
				btn = '<a class="btn btn-success ml-3">Add to wishlist</a>';
			}
			else{
				type_text = '<span class="pl-2">Followed <b>'+journey_data[i].name+'</b></span>';
				btn = '<a class="btn btn-success ml-3">Follow</a>';
			}

			journey_inner_html = '<div class="row mt-2">'+
				  			'<div class="col-lg-2 col-md-2 col-3">'+
				  				'<img class="mr-1 img-fluid" src="'+journey_data[i].img_url+'" width="100%">'+
				  			'</div>'+
				  			'<div class="col-lg-10 col-md-10">'+
				  				'<h4>'+journey_data[i].name+' <span class="fa fa-map-marker-alt f-13 pl-2"></span><small class="f-13"> '+journey_data[i].location+'</small>'+btn+'</h4>'+
				  				'<p>'+journey_data[i].text+'</p>'+
				  			'</div>'+
				  		'</div>';
		}

		journey_html = '<li class="StepProgress-item '+journey_data[i].type+'">'+
				  	'<div class="content-box">'+
				  		'<div>'+
				  			'<img class="float-left img-fluid" src="img/portfolio1.jpg" width="50px">'+
					  		'<span>'+
					  			'<b class="pl-2">Mahek jain</b><br>'+
					  			type_text+
					  		'</span>'+
				  		'</div>'+
				  		'<div class="clearfix"></div>'+
				  		'<small>'+journey_data[i].time+'</small>'+
				  		journey_inner_html+
				  	'</div>'+
				  '</li>';

		$('.StepProgress').append(journey_html);
	}

	journey_start_html = '<li class="StepProgress-item">'+
				  	'<div class="content-box">'+
				  		'<h2 class="pt-3 pb-3"><span class="fa fa-map-marker-alt"></span> This journey started on 5 Jan 2015.</h2>'+
				  	'</div>'+
				  '</li>';
	$('.StepProgress').append(journey_start_html);
}

function render_review_list(){
	for (var j = 0; j < review_data.length; j++) {
		var review_list = '<div class="mt-2 mb-2">'+
				  			'<img class="float-left pr-4 img-fluid"  src="img/portfolio1.jpg" width="65px">'+
					  		'<b>Mahek jain</b> reviewed <b>'+review_data[j].name+'</b> '+review_data[j].time+''+
				  		'</div><div class="clearfix"></div>';
		$('.popular-review').append(review_list);
	}
}

function render_trips_list(){
	for (var k = 0; k < trip_data.length; k++) {
		var trip_list = '<div class="mt-2 mb-2">'+
				  			'<img class="float-left pr-4 img-fluid"  src="img/portfolio1.jpg" width="65px">'+
					  		'<b>Mahek jain</b> added trip to <b> '+review_data[k].name+'</b> '+review_data[k].time+''+
				  		'</div><div class="clearfix"></div>';
		$('.popular-trips').append(trip_list);
	}
}