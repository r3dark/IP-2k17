function function_delete_note()
{
	flag = 0;
	if(li_id_count > 0)
	{
		li_id_count--;
		// console.log("li_id: " + li_id_count);
		document.getElementById(li_id_count).remove();
	}
	else if(li_id_count == 0)
	{
		alert("Please enter at least 1 note!!");
	}
}