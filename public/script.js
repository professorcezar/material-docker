// Init
(function (){
    return fetch('http://localhost:3000/list')
    .then(response => response.json())
    .then((list) => {
        $('#items-table').bootstrapTable({
            data: list
        });
    });

})();

function add() {
    const payload = {
		desc: document.getElementById('input-item').value, 
	};
	
    return fetch('http://localhost:3000/add', {
        method: "POST",
        headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).catch(error => {
        console.log("This error: ==>>", error);
    });
}