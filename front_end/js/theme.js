var count = 1;

function theme_change()
{
	var nav = document.getElementsByClassName('navbar');
	var mat_but = document.getElementsByClassName('material-button');
	var back_body = document.getElementsByTagName('body');
	var notebg = document.getElementsByClassName('note-bg');
	var log = document.getElementById('logout');

	if((count % 2) == 0)
	{
		// dark
		nav[0].style.background = "#5C6BC0";

		for (var i = mat_but.length - 1; i >= 0; i--)
		{
			mat_but[i].style.background = "#FD4848";
		}
		
		back_body[0].style.background = "#262626";



		particlesJS('particles-js',
      	{
        	"particles": {
	          	"number": {
	            	"value": 4,
	            	"density": {
	              		"enable": true,
	              		"value_area": 100
	            	}
	          	},
	          	"color": {
	            	"value": "#FFFFFF"
	          	},
	          	"shape": {
	            	"type": "circle",
	            	"stroke": {
	              		"width": 0,
	              		"color": "#000000"
	            	},
	            	"polygon": {
	              	"nb_sides": 5
	            	},
	            	"image": {
	              		"width": 100,
	              		"height": 100
	            	}
	          	},
	          	"opacity": {
	            	"value": 0.5,
	            	"random": false,
	            	"anim": {
	              		"enable": true,
			            "speed": 2,
			            "opacity_min": 0.1,
			            "sync": false
	            	}
	          	},
	          	"size": {
	            	"value": 5,
	            	"random": true,
	            	"anim": {
	              		"enable": true,
	              		"speed": 15,
	              		"size_min": 0.1,
	              		"sync": false
	            	}
	          	},
	          	"line_linked": {
	            	"enable": false,
	            	"distance": 150,
	            	"color": "#FFFFFF",
	            	"opacity": 0.4,
	            	"width": 1
	          	},
	          	"move": {
	            	"enable": true,
	            	"speed": 6,
	            	"direction": "bottom",
	            	"random": false,
	            	"straight": false,
	            	"out_mode": "out",
	            	"attract": {
	            		"enable": false,
	            		"rotateX": 600,
	            		"rotateY": 1200
	            	}
	          	}
        	},
	        "interactivity": {
	          	"detect_on": "canvas",
	          	"events": {
	            	"onhover": {
	              		"enable": false,
	              		"mode": "repulse"
	            	},
	            	"onclick": {
	              		"enable": false,
	              		"mode": "push"
	            	},
	            	"resize": true
	          	},
	          	"modes": {
	            	"grab": {
	              		"distance": 200,
	              		"line_linked": {
	                		"opacity": 1
	              		}
	            	},
	            	"bubble": {
	              		"distance": 400,
	              		"size": 40,
	              		"duration": 2,
	              		"opacity": 8,
	              		"speed": 3
	            	},
	            	"repulse": {
	              		"distance": 200
	            	},
	            	"push": {
	              		"particles_nb": 4
	            	},
	            	"remove": {
	              		"particles_nb": 2
	            	}
	          	}
	        },
      	}
    );
	}

	else if((count % 2) != 0)
	{
		// light
		nav[0].style.background = "#FB8C00";
		
		for (var i = mat_but.length - 1; i >= 0; i--)
		{
			mat_but[i].style.background = "#FFC400";
		}
		
		back_body[0].style.background = "#FFFFFF";

		particlesJS('particles-js',
      	{
        	"particles": {
	          	"number": {
	            	"value": 4,
	            	"density": {
	              		"enable": true,
	              		"value_area": 100
	            	}
	          	},
	          	"color": {
	            	"value": "#795548"
	          	},
	          	"shape": {
	            	"type": "circle",
	            	"stroke": {
	              		"width": 0,
	              		"color": "#000000"
	            	},
	            	"polygon": {
	              	"nb_sides": 5
	            	},
	            	"image": {
	              		"width": 100,
	              		"height": 100
	            	}
	          	},
	          	"opacity": {
	            	"value": 0.5,
	            	"random": false,
	            	"anim": {
	              		"enable": true,
			            "speed": 2,
			            "opacity_min": 0.1,
			            "sync": false
	            	}
	          	},
	          	"size": {
	            	"value": 5,
	            	"random": true,
	            	"anim": {
	              		"enable": true,
	              		"speed": 15,
	              		"size_min": 0.1,
	              		"sync": false
	            	}
	          	},
	          	"line_linked": {
	            	"enable": false,
	            	"distance": 150,
	            	"color": "#000000",
	            	"opacity": 0.4,
	            	"width": 1
	          	},
	          	"move": {
	            	"enable": true,
	            	"speed": 6,
	            	"direction": "right",
	            	"random": false,
	            	"straight": false,
	            	"out_mode": "out",
	            	"attract": {
	            		"enable": false,
	            		"rotateX": 600,
	            		"rotateY": 1200
	            	}
	          	}
        	},
	        "interactivity": {
	          	"detect_on": "canvas",
	          	"events": {
	            	"onhover": {
	              		"enable": false,
	              		"mode": "repulse"
	            	},
	            	"onclick": {
	              		"enable": false,
	              		"mode": "push"
	            	},
	            	"resize": true
	          	},
	          	"modes": {
	            	"grab": {
	              		"distance": 200,
	              		"line_linked": {
	                		"opacity": 1
	              		}
	            	},
	            	"bubble": {
	              		"distance": 400,
	              		"size": 40,
	              		"duration": 2,
	              		"opacity": 8,
	              		"speed": 3
	            	},
	            	"repulse": {
	              		"distance": 200
	            	},
	            	"push": {
	              		"particles_nb": 4
	            	},
	            	"remove": {
	              		"particles_nb": 2
	            	}
	          	}
	        },
      	}
    );
	}

	count++;
}