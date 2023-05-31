<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <h1 id="userName"></h1>
        <h2>Top Scores:</h2>
    <div id="purchased" class="grid-container1">
    </div>
    <h2>Favorited Games:</h2>
    <div id="favorite" class="grid-container2">
    </div>
</head>

</html>
<style>
    .purchased {
		background-color: white;
        border-radius: 20px;
        padding: 20px;
	}
    .card
    {
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        margin: 10px;
    }
    .sold,
    .saved {
        background-color: white;
        border-radius: 20px;
        padding: 20px;
    }
    h3 {
        color: #647560;
    }
    li {
        color: #383F51;
    }
    button {
        transition: width .2s, height, .2s;
        color: #DDDBF1;
        background-color: #3C4F76;
        border-radius: 20px;
        border-color: transparent;
        padding: 5px;
        margin: 5px;
    }
    button:hover {
        box-shadow: 3px 3px 3px #75768077;
        color: #3C4F76;
        background-color: #DDDBF1;
    }
</style>

<script>
    const userName = window.localStorage.getItem("ID");

    
	// const resultContainer = document.getElementById('listings');
	const url = 'https://marketplace.nighthawkcodingsociety.com/api/person/' + userName;
	  fetch(url)
		.then((response) => {
		  return response.json();
		})
		.then(data => {
            const name = data.name;
		    document.getElementById("userName").innerHTML = "Hello " + name + "!";
		})
		.catch(function(error) {
		  console.log(error);
		});
  
    const resultContainer1 = document.getElementById('purchased');
	  //const url = 'https://marketplace.nighthawkcodingsociety.com/api/person/' + userName;
	  fetch(url)
		.then((response) => {
		  return response.json();
		})
		.then((json) => {
		  for (const item in json.stats) {
            let listingCard = document.createElement('div');
            listingCard.setAttribute("class", "card");
            let name = document.createElement('h3');
			let seller = document.createElement('p');
            name.setAttribute("class", "cardHeading");
            name.innerHTML = "Item Name: " + json.stats[item].name;
			seller.innerHTML = "Seller/Contact Info: " + json.stats[item].seller;
            listingCard.appendChild(name);
			listingCard.appendChild(seller);
            resultContainer1.appendChild(listingCard);
        }
		})
		.catch(function(error) {
		  console.log(error);
		});

    const resultContainer2 = document.getElementById('favorite');
	  //const url = 'https://marketplace.nighthawkcodingsociety.com/api/person/' + userName;
	  fetch(url)
		.then((response) => {
		  return response.json();
		})
		.then((json) => {
		  for (const item in json.stats) {
            let listingCard = document.createElement('div');
            listingCard.setAttribute("class", "card");
            let name = document.createElement('h3');
            name.setAttribute("class", "cardHeading");
            name.innerHTML = "Item Name: " + json.stats[item].name;
            listingCard.appendChild(name);
            resultContainer2.appendChild(listingCard);
        }
		})
		.catch(function(error) {
		  console.log(error);
		});

    
</script>