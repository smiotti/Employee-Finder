# Employee-Finder
### Assignment #11 - Employee Finder: Node and Express Servers


Welcome to *Employee Finder*, a compatibility-based "employee finder" application. This full-stack site will take in results from user's survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

*This application is intended for developer learning purposes, and not being published commercially.  No animals were harmed while developing and testing this app.*


### How to use Employee Finder:
To use Employee Finder. navigate your web browser to http://localhost:8080/.  This is the home page.  From here you can navigate to the Employee Lists or to the user Survey.  Click the "Go to Survey" button, complete the survey questions and click Submit.  Note: All user survey fields are required to be filled out.  Based on your answers, a window will pop up with an existing employee that is the closest match to you. 

The user's most compatible employee uses the following logic as a guide:

   * Compare the difference between current user's scores and scores from other emplpyees, question by question. Add up the differences to calculate the absolute `Total Difference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Put another way: there are no negative number totals! This app calculates the difference of both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

From here you can close the closest Match window and try another survey (there is also a Reset Form link on the survey footer), navigate to the updated Employee List or click the Home button to return to the Home Page.

 [Employee-Finder](Images/emplpyeeFinder.GIF)



   * `spotify-this-song` - This will search the Spotify API for a song (artist optional) and render the following information about the song to the command line:

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

      [Example: node liri spotify-this-song Dont stand so close to me](screen_cap/liri_spotify-this-song.GIF)

        *If you are getting unexpected results, you can strengthen your search by adding the artist name. To do this use a "," between song and artist.*
        
        [Example: node liri spotify-this-song Alone, Heart](screen_cap/liri_spotify-this-song_with_artis.GIF)
        
        *If no song is provided then Liri will default to "What's My Age Again" by blink-182.*

        [Employee-Finder](Images/emplpyeeFinder.GIF)


------
Update Portfolio:
 [My Portfolio](https://smiotti.github.io/Bootstrap-Portfolio/)
