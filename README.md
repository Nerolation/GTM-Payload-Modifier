# GTM-Payload-Modifier

## JavaScript snippet for Google Tag Manager which enables modification of Google's 'measurement protocol' parameters.
</br>

* The JS snippet can be implemented by using a 'Custom Javascript' Variable in Google Tag Manager (GTM). 
* Next the Variable must be attached to the Tag which sends the data you'd like to modify. This can be done through allowing the Tag to overwrite settings, and then by setting the JS Variable as 'Custom Task' in the "Fields to set" section. 
* To modify certain parameters with every tag that is fired, set the variable as 'Custom Task' in the Settings Variable
 </br>

Check out [Google's field reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) for all available parameters that can be replaced or removed. 
</br></br></br>
## Configuration Options
| Variable | Example | Description |
| ---| ---| --- |
| FieldReference |  "dl" | [Payload parameter](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) that should be removed or modified |
| ValueToReplace | "Lorem Ibsum" | String or RegEx that should be replaced |
| NewValue | "Lorem Ipsum" | String that should replace var ValueToReplace |
| remove_complete_parameter | true | Boolean, if true: Strips out the parameter and it's value |

</br></br></br>
## Example Usage
Let's say your developers implemented tracking with differing product lists that actually should be the same:
The Hit Payloads might look like the following:</br>
https://www.google-analytics.com/collect?......&pal=Recommended%20Products.....</br>
https://www.google-analytics.com/collect?......&pal=recommended%20products.....</br>
</br></br>
In order to correct this issue use the CustomTask and set: </br>
| Variable | Value |
| --- | --- |
| FieldReference | "pal" |
| ValueToReplace |"Recommended Products" |
| NewValue | "recommended products" |
| remove_complete_parameter | false | 



Check out my [medium article](https://medium.com/@toni_w/hash-to-ethereum-f554fee4d055) or my [personal website](https://toniwahrstaetter.com/) for further information
