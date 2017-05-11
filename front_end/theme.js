var count = 0;

function theme_change()
{
	var nav = document.getElementsByClassName('navbar');
	var mat_but = document.getElementsByClassName('material-button');
	var back_body = document.getElementsByTagName('body');
	// var notebg = document.getElementsByClassName('note-bg');

	if((count % 2) == 0)
	{
		nav.style.background = "#5C6BC0";
		mat_but.style.background = "#FD4848";
		back_body.style.background = "#262626";
		// notebg.style.background-color = "#FD4848";
	}
	else if((count % 2) != 0)
	{
		nav.style.background = "#3F51B5";
		mat_but.style.background = "#E91E63";
		back_body.style.background = "#FFFFFF";
		// notebg.style.background-color = "#E91E63";
	}

	count++;
}