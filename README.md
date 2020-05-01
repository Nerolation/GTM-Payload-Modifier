# GTM-Payload-Modifier

## JavaScript snippet for Google Tag Manager to enable modification of Google's 'measurement protocol' parameters.


* The JS snippet can be implemented by using a 'Custom Javascript' Variable in Google Tag Manager (GTM). 
* Next the Variable must be attached to the Tag which sends the data you'd like to modify. This can be done through allowing the Tag to overwrite settings, and then by setting the JS Variable as 'Custom Task' in the "Fields to set" section. 
* To modify certain parameters with every tag that is fired, set the variable as 'Custom Task' in the Settings Variable


Check out [Google's field reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) for all available parameters that can be replaced or removed. 

