# ICanHazPghPlow
This adds a button to the Pittsburgh plow maps that lets you see all data over the course of the storm event or view past storm events.

## How to install? 
* Install as a [Chrome Extension](https://chrome.google.com/webstore/detail/icanhazpghplow/hecnkipdakpeciljiompkdmjjaccfcnp?hl=en-US&gl=US)
* Or, you can just clone this repo and unpack it locally in chrome in developer mode.

### Normal view of plows, restricted by time
![Alt text](/screenshots/normalview.png?raw=true "Normal Plow View")

### After clicking the "View All Data" button
You can of course zoom in like normal
![Alt text](/screenshots/allview.png?raw=true "After Clicking Button")

### Can I view past snowplow information?
Sure. You'll need the docid of where the information is stored. Then just pass that in as the GET parameter 'myDoc' (e.g. http://city.temeda.com/?myDoc=1HazqkFFjicP0bzKUB2qoM41q-i1QQIvBHIjRjwrq) See the URL as an example: I can take a quick look at the south side and see what was missed during this event.
![Alt text](/screenshots/mydoc.png?raw=true "Viewing Past Storm Event (missing salted roads circled)")

### Where is the docId?
I put it in the legend for easy cut and paste and storage for later.

![Alt text](/screenshots/legendWithDoc.png?raw=true "Legend (with myDoc)")

### Why?
Because I'm genuinely curious about what streets aren't making the cut. Utilizing data city council members, citizens, or DPW can analyze at a glance a map during a snow emergency and easily determine what streets were left untouched.
