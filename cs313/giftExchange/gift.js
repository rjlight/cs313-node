function logIn() {
    var request = new XMLHttpRequest()

    // Open a new connection, using the POST request on the URL endpoint
    request.open('POST', '', true) //for the database when up and running
  
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
  
      //will be accessing names from the db
      if (request.status >= 200 && request.status < 400) {
        for (i in data) { //put the names in a list
                  var txt = "<li>" + data[i] + "</li><br>" ;
            } 
      } else if (1 == 1) {
        var txt = "<li>" + "AJAX request worked!" + "</li><br>" ;
      } else  {
        console.log('error')
      }
          document.getElementById("group").innerHTML = txt;
    }
      // Send request
      request.send()
}
function newUser() {
    //query database to create a new group
}
function addCouple() {
    //query db to add couple
}
function addSingle() {
    //query db to add single person
}
function assignNames() {
    var request = new XMLHttpRequest()

    // Open a new connection, using the POST request on the URL endpoint
    request.open('POST', '', true) //for the database when up and running
    
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
    
        //will be accessing names from the db
        if (request.status >= 200 && request.status < 400) {
        for (i in data) { //put the names in a list
                    var txt = "<li>" + data[i] + "</li><br>" ;
            } 
        } else if (1 == 1) {
        var txt = "<li>" + "AJAX request worked again! - Assigned names!" + "</li><br>";
        txt = "<li>" + "Me - You" + "</li><br>"
        } else  {
        console.log('error')
        }
            document.getElementById("group").innerHTML = txt;
    }
        // Send request
        request.send()
}
function emailGroup() {
    //do something to send this email list to the whole group 
    //will need to query for the emails of each member
    //will need to query to recreate the list and then email
}