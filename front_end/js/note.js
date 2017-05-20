var li_id_count = 0;
var div_id_count = 15000;
var in_id_count = 30000;
var but_id_count = 30500;
var brk_id_count = 31000;
var flag = 0;

function function_submit(in_id, div_id, but_id, brk_id)
{
	flag = 0;
	// console.log("in_id: " + in_id);
	// console.log("div_id: " + div_id);
	var txt = document.getElementById(in_id).value;

	document.getElementById(in_id).remove();
	document.getElementById(brk_id).remove();
	document.getElementById(but_id).remove();
	in_id_count--;
	brk_id_count--;
	but_id_count--;

	// console.log("in_id: " + in_id);
	// console.log("brk_id: " + brk_id);
	// console.log("but_id: " + but_id);

	var par = document.createElement("p");
	var x = document.createTextNode(txt);
	par.appendChild(x);
	document.getElementById(div_id).appendChild(par);
}

function function_create()
{
	if(flag == 0)
	{
		flag = 1;
		var node_li = document.createElement("li");
		node_li.id = li_id_count;
		// var node_form = document.createElement("form");
		// node_form.id = form_id_count;
		var node_div = document.createElement("div");
		node_div.setAttribute("class", "rotate-1 note-bg");
		node_div.id = div_id_count;

		var val_in = document.createElement("textarea");
		val_in.setAttribute("class","form-control");
		val_in.setAttribute("rows","5");
		val_in.setAttribute("cols","50");
		val_in.id = in_id_count;

		var brk = document.createElement("br");
		brk.id = brk_id_count;

		var node_button = document.createElement("button");
		node_button.setAttribute("class","btn btn-default");
		node_button.id = but_id_count;
		var textnode = document.createTextNode("Save");
		node_button.appendChild(textnode);
		

		node_div.appendChild(val_in);
		node_div.appendChild(brk);
		node_div.appendChild(node_button);

		// node_form.appendChild(node_div);

		node_li.appendChild(node_div);

		if(li_id_count == 0)
		{
			document.getElementById("notes_list").appendChild(node_li);
		}
		else if(li_id_count > 0)
		{
			var x = document.getElementById("notes_list");
			x.insertBefore(node_li, x[0]);
		}

		i = in_id_count;
		d = div_id_count;
		b = but_id_count;
		br = brk_id_count;
		node_button.addEventListener("click", function() 
		{
			function_submit(i, d, b, br);
		});

		div_id_count++;
		in_id_count++;
		but_id_count++;
		brk_id_count++;
		li_id_count++;
	}
	else if(flag == 1)
	{
		alert("Please save this note first !!!");
	}
}