<html>

<head>
  <style>
    .btn {
      background-color: #383F51;
      color: white;
      padding: 10px;
      margin: 5px;
      border: none;
      cursor: pointer;
      width: 25%;
      transition: width .2s, height, .2s;
      border-radius: 20px;
    }
    .btn:hover {
      background-color: #3C4F76;
      box-shadow: 5px 5px 5px #75768077;
    }
    .bg-success {
      background-color: white;
      border-radius: 20px;
      padding: 10px;
    }
    .form-label {
      color: #383F51;
    }
    .text-light {
      text-align: center;
    }
    .form-control {
      width: 100%;
      padding: 10px;
      margin: 5px;
      display: inline-block;
      box-sizing: border-box;
      border-radius: 20px;
      border-color: #383F51;
      border-style: solid;
      transition: width .2s, height, .2s;
      box-shadow: none;
    }
    .form-control:hover {
      box-shadow: 5px 5px 5px #75768077;
    }
  </style>
  <script>
    const login_url = "https://marketplace.nighthawkcodingsociety.com/api/person/login";
    function authenticate() {
      var email = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      // store data in JavaScript object
      let data = { email: email, password: password };
      console.log(data);
      const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // convert to JSON
      };
      fetch(login_url, options)
        .then(response => {
          // check for response errors
          if (response.status !== 200) {
            error('POST API response failure: ' + response.status);
            return;
          }
          return response.json(); // parse as JSON
        })
        .then(data => {
          console.log(data); // valid response
          // Store the response in sessionStorage
          localStorage.setItem('ID', data);
          console.log('Data saved in sessionStorage');
          // redirect on successful login
          window.location.href = "https://pranaviinukurti.github.io/DelNorteMarketPlace/profile/"; // direct to profile once logged in
        })
        // catch fetch errors (ie Nginx ACCESS to server blocked)
        .catch(err => {
          error(err + " " + login_url);
        });
    }
    // Something went wrong with actions or responses
    function error(err) {
      // log as Error in console
      console.log(err);
    }
  </script>
</head>

<body>
  <div class="bg-success w-50 mx-auto m-5">
    <h2 class="text-light mx-5 pt-5">Login</h2>
    <!-- 'email' is mapped to 'username' for Spring Security -->
    <div class="mb-3 px-5">
      <label class="form-label" for="username">EMAIL</label><br>
      <input class="form-control" type="email" id="username" name="username" size="20" required>
    </div>
    <div class="mb-3 px-5">
      <label class="form-label" for="password">PASSWORD</label><br>
      <input class="form-control" type="password" id="password" name="password" size="20" required>
    </div>
    <button class="btn btn-custom text-nowrap text-light my-3 mx-5" type="submit" onclick="authenticate()">Log
      In</button>
  </div>
</body>

</html>