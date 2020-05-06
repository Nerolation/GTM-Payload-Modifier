function() {

  // Modify hit payload by deleting a certain payload-parameter out of the hit payload
  // Additionally, strips out empty lists for given FieldReference
  
  // @dev exchange parameter value, see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference

//---------SETTINGS------------------------------------------------

 var FieldReference = /pal/g, // Check measurement protocol for field reference

     ValueToReplace = /VALUE TO REPLACE/g, // Regex allowed

     newValue = "Lorem Ipsum",

     remove_complete_parameter = true; // no newValue needed as if true, as parameter is completely removed


//---------End-of-Settings-----------------------------------------

  if(!FieldReference.toString().includes("=")) {

    FieldReference = (FieldReference.toString() + "=/").replace(/\/.=/, "=")

  }

  return function(tracker) {

    var originalSendHitTask = tracker.get('sendHitTask'); 

    tracker.set('sendHitTask', function(model) {

       var hitPayload = model.get('hitPayload');

       var hitPayloadElements = hitPayload.split("&");

       for(var i = 1; i < hitPayloadElements.length; i++) {

         if(hitPayloadElements[i].match(FieldReference)){

           if(remove_complete_parameter == true && hitPayloadElements[i].split("=")[1].match(ValueToReplace) || hitPayloadElements[i].split("=")[1] == "") {

             var hitPayload = hitPayload.replace("&" + hitPayloadElements[i], "");

           }

           else {

             var hitPayload = hitPayload.replace(hitPayloadElements[i], hitPayloadElements[i].split("=")[0] + "=" + hitPayloadElements[i].split("=")[1].replace(ValueToReplace, newValue));

           }

         }

       }

       model.set('hitPayload', hitPayload, true);

       originalSendHitTask(model);

    });

  }

}
