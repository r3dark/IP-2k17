var div_id_count = 1;
var in_id_count = 1;
var but_id_count = 1;

function fun_submit()
{
	// window.alert("Have fun_submit");
	var txt = document.getElementById("text_area");
	var sub = document.getElementById("submit");

	var txt_val = document.getElementById("text_area").innerHTML;
	
	var h4 = document.createElement("h4");
	// h4.style.font-family="Kranky";
	var x = document.createTextNode(txt.value);
	h4.appendChild(x);
	document.getElementById("div_notes").appendChild(h4);
}

function fun_create()
{
	//window.alert("fun_create");
	var node_li = document.createElement("li");
	var node_form = document.createElement("form");
	var node_div = document.createElement("div");
	node_div.setAttribute("class", "rotate-1 lazur-bg");
	node_div.id = div_id_count;
	 // window.alert(node_div.id);

	var val_in = document.createElement("input");
	val_in.setAttribute("type","text");
	val_in.setAttribute("class","form-control");
	val_in.id = in_id_count;

	var br = document.createElement("br");

	var node_button = document.createElement("button");
	node_button.setAttribute("class","btn btn-default");
	node_button.id = but_id_count;
	node_button.setAttribute("align","center");
	node_button.addEventListener("onclick",fun_submit);
	var textnode = document.createTextNode("Submit");
	node_button.appendChild(textnode);

	node_div.appendChild(val_in);
	node_div.appendChild(br);
	node_div.appendChild(node_button);

	node_form.appendChild(node_div);

	node_li.appendChild(node_form);

	document.getElementById("notes_list").appendChild(node_li);

	div_id_count++;
	in_id_count++;
	but_id_count++;
}

$(document).ready(function ()
{
	$("#but_id_count").click(function()
	{
		var text = $('#in_id_count').text();
		$("#in_id_count").remove();
		$("#but_id_count").remove();
		$('node_div').html(text);
	});
});

$("#submit").click(function()
{
	$("#text-area").remove();
	$("#submit").remove();
});