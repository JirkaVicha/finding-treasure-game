# finding-treasure-game
This JavaScript code is for a simple treasure hunt game. Here's how it works:

It defines functions to generate random numbers for the treasure's location, calculate the distance between the player's click and the treasure, and provide hints based on the distance.
It initializes the game by setting up the treasure's coordinates, setting the maximum number of attempts, and setting up event handlers for clicks on the map.
When the player clicks on the map, it calculates the distance to the treasure, provides a hint based on that distance, and updates the number of remaining attempts.
If the player finds the treasure (distance < 10), it displays a success message and changes the background color to green.
If the player exceeds the maximum number of attempts (clicks === 12), it displays a failure message and changes the background color to red.
It's a fun game where players click on a map to find hidden treasure within a limited number of attempts!

This game is on base of Great book, JavaScript for Kids, written by Nick Morgan. 

Live preview: https://jirkavicha.github.io/finding-treasure-game/
