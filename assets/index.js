// Submit Function for Contact Form

function postMSG() {
  //Get values from input form above
  var email = document.getElementById("inputEmail").value;
  var name = document.getElementById("inputName").value;

  //Format the text that will show up in Slack
  var text = "Name: " + name + " | Email: " + email;

  //Payload function to prepare JSON Object, channel destination here.
  var payload = formatForSlack(text, "contact-us");

  //The POST request done by JQuery
  $.ajax({

    url: 'https://hooks.slack.com/services/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',
    type: 'POST',
    processData: true,
    data: payload,
    success: function (data) {
      alert("Success!");
    },
    error: function (data) {
      alert("Failed!");
      console.log(data);
    }
  });
}

//Format JSON for Slack
function formatForSlack(msg, chan) {
  var payload = {
    "channel": chan,
    "text": msg
  };
  // return json string of payload
  return JSON.stringify(payload);
}