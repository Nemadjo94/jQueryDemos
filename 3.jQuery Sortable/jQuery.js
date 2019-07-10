//jQuery
//$('#sortable').sortable();
$('#sortable').sortable({ connectWith: '#sortableToo', placeholder: "placeholderBox"});
$('#sortableToo').sortable({ connectWith: '#sortable', placeholder: "placeholderBox"});


