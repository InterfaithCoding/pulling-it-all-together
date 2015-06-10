Putting the finishing touches to our game
=========================================

Well done! 

We have now built all the parts of our game that we need to make it work - we just need to combine the various elements.

Let's quickly review each component.

1. Firstly, we built the **structure and layout** of our website using **HTML**. You can review what HTML is and how it works [here](https://github.com/InterfaithCoding/frontend/blob/master/html.md). For more advanced tutorial on HTML I recommend the [W3 Schools HTML Tutorial](http://www.w3schools.com/html/)

2. Secondly, we added some **style** to our website using **CSS**. We made all our images a uniform size, gave them a rounded border and spaced them all evenly along a line. We also added a background to our website and designed how it should look when the player visits our website. You can review what CSS is and how it works [here](https://github.com/InterfaithCoding/frontend/blob/master/css.md). For more advanced tutorial on CSS I recommend the [W3 Schools CSS Tutorial](http://www.w3schools.com/css/)

3. Thirdly, we added some **interactivity** to our website using **JavaScript** and a very useful JavaScript library called **jQuery**. You can review what JavaScript and jQuery are and how it works [here](https://github.com/InterfaithCoding/frontend/blob/master/js.md)

We wanted to make sure that our player knows that she can click on the images to play the game. Using the event handler, 'mouseenter' and 'mouseleave' (i.e. when the mouse goes over or leaves the images), we updated our CSS rules for the border of the image. When the mouse is not over the images, the border is dotted, but when our mouse is over the images, the border is solid. 


4. Lastly, we built the back-end engine - to make our game functional. For the game we needed three pieces of information: the player's choice, the computer's choice and a comparison between these two choices. We want to store the player's choice and the computer's choice as variables - so we can access these values at a later date. We said that we wanted our computer's choice to be random, so we used the inbuilt JavaScript function, Math.random() to pick a random number. We then converted the random number in to one of three different choices. For the player's choice, we just gave it a value. But in our final version, we are going to need to get our player's choice from the image that the player clicks. 
