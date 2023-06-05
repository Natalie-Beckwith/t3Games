<html>
<style>
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 20px;
    border-color: #383F51;
    border-style: solid;
    transition: width .2s, height, .2s;
    box-shadow: none;
  }
  input:hover {
    box-shadow: 5px 5px 5px #75768077;
  }
  label {
    color: #647560;
  }
  button {
    background-color: #383F51;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 20px;
    transition: width .2s, height, .2s;
  }
  button:hover {
    box-shadow: 5px 5px 5px #75768077;
    background-color: #3C4F76;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #383F51;
  }
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  img.avatar {
    width: 40%;
    border-radius: 50%;
  }
  .container {
    padding: 16px;
    width: 50%;
    margin: auto;
    background-color: white;
    border-radius: 20px;
    ;
  }
  span.psw {
    float: right;
    padding-top: 16px;
  }
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }

</style>
<body>

  <h2>Create an account !</h2>

  <form onsubmit="return false;">

    <div class="container">
      <label for="uname"><b>Email</b></label>
      <input id="email" type="text" placeholder="Enter Email" name="uname" required>

      <label for="name"><b>Name</b></label>
      <input id="name" type="text" placeholder="Enter Name" name="name" required>

      <label for="psw"><b>Password</b></label>
      <input id="pass" type="password" placeholder="Enter Password" name="psw" required>

      <label for="dob"><b>Date of Birth</b></label>
      <input id="dob" type="text" placeholder="Enter DOB (mm-dd-yyyy)" name="dob" required>

      <button onclick="createAccount()">Create Account</button>




    </div>


  </form>

<script>
function createAccount() {

    if (ValidateDOB()) {
      let email = document.getElementById("email").value;
      let name = document.getElementById("name").value;
      let pass = document.getElementById("pass").value;
      let dob = document.getElementById("dob").value;
      alert("account created successfully");

      console.log("im here");
      //setTimeout(() => {  console.log("World!"); }, 100000);


      var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      const finalUrl = 'https://marketplace.nighthawkcodingsociety.com/api/person/post?email=' + email + "&name=" + name + "&password=" + pass + "&dob=" + dob;
      fetch(finalUrl, requestOptions)
        //.then( response  => console.log(response.headers()))
        //.then(result => console.log(result))
        .catch(error => console.log('error', error));


      //console.log(response.status);
      //https://marketplace.nighthawkcodingsociety.com/api/person/post?email=test@testing.com&name=test&password=test&dob=01-01-2002
    } else {
      console.log("error");
    }

  }

  function ValidateDOB() {
    //Get the date from the TextBox.
    var dateString = document.getElementById("dob").value;
    var splitDate = dateString.split("-");

    //Check whether valid mm-dd-yyyy Date Format.
    if (splitDate.length > 1) {
      return true;
    } else {
      alert("Enter date in dd/MM/yyyy format ONLY.");
      return false;
    }
  }
</script>

</body>
</html>
