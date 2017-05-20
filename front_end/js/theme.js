var count = 1;

function theme_change()
{
	var nav = document.getElementsByClassName('navbar');
	var mat_but = document.getElementsByClassName('material-button');
	var back_body = document.getElementsByTagName('body');
	var notebg = document.getElementsByClassName('note-bg');

	if((count % 2) == 0)
	{
		// dark
		nav[0].style.background = "#5C6BC0";

		for (var i = mat_but.length - 1; i >= 0; i--)
		{
			mat_but[i].style.background = "#FD4848";
		}
		
		back_body[0].style.background = "#262626";
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
	}

	count++;
}