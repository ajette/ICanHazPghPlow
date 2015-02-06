# ICanHazPghPlow
This adds a button to the Pittsburgh plow maps that lets you see all data over the course of the storm event. Lets you (or the city) know what streets have not been plowed at all in the course of the storm event.

## How to install? 
* It's a chrome extension. You can just clone this repo and unpack it locally in chrome in developer mode.
* Okay, I published it also. [Chrome Extension](https://chrome.google.com/webstore/detail/icanhazpghplow/hecnkipdakpeciljiompkdmjjaccfcnp?hl=en-US&gl=US)

### Normal view of plows, restricted to raw data
![Alt text](/screenshots/normalview.png?raw=true "Normal Plow View")

### After clicking the "View All Data" button
You can of course zoom in like normal
![Alt text](/screenshots/allview.png?raw=true "After Clicking Button")

### Can I view past snowplow information?
Sure. You'll need the docid of where the information is stored. Then just pass that in as a GET parameter. I'll add in functionality to find the docid's easily but if you root around you can find them. See the URL as an example: I can take a quick look at the south side and see what was missed during this event.
![Alt text](/screenshots/mydoc.png?raw=true "Viewing Past Storm Event (missing salted roads circled)")

### Why?
Because I'm genuinely curious about what streets aren't making the cut. Utilizing data city council members, citizens, or DPW can analyze at a glance a map during a snow emergency and easily determine what streets were left untouched.
