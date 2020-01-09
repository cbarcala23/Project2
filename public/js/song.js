$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our posts
    var songContainer = $(".song-container");
    var loungeSelect = $("#lounge");
    // Click events for the edit and delete buttons
    // $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.vote", handlePostEdit);
    // Variable to hold our posts
    var songs;
  
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var songId;
    if (url.indexOf("?songId=") !== -1) {
      songId = url.split("=")[1];
      getSongs(songId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getSongs();
    }
  
  
    // This function grabs posts from the database and updates the view
    function getSongs(user) {
      playlistId = playlist || "";
      if (authorId) {
        playlistId = "/?playlist_id=" + playlistId;
      }
      $.get("/api/songs", function(data) {
        console.log("Songs", data);
        songs = data;
        if (!songs || !songs.length) {
          displayEmpty(playlist);
        }
        else {
          initializeRows();
        }
      });
    }
  
   
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        songContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < song.length; i++) {
        songsToAdd.push(createNewRow(songs[i]));
      }
      songContainer.append(songsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(song) {
      
      var newSongRow = $("<div>");
      newSongRow.addClass("card");
      var upvoteBtn = $("<button>");
      upvoteBtn.text("Yea");
      upvoteBtn.addClass("upvote btn btn-primary");
      var downvotebtn = $("<button>");
      downvotebtn.text("nah");
      downvotebtn.addClass("downvote btn btn-danger");
      var newSongTitle = $("<h2>");
      var newSource = $("<small>");
      var newSongPoster = $("<h5>");
      newSongPoster.text("Added by: " + song.User.username);
      newSongPoster.css({
        float: "right",
        color: "green",
        "margin-top":
        "-10px"
      });
      var newSongCardBody = $("<div>");
      newSongCardBody.addClass("card-body");
      var newSongBody = $("<p>");
      newSongTitle.text(song.title + " ");
      
      newSongCardBody.append(upvoteBtn);
      newSongCardBody.append(downvoteBtn);
      newSongCardHeading.append(newSongTitle);
      newSongCardHeading.append(newSongPoster);
      newSongCardBody.append(newSongBody);
      newSongCard.append(newSongCardHeading);
      newSongCard.append(newSongCardBody);
      newSongCard.data("song", song);
      return newSongCard;
    }
  
    // This function figures out which post we want to delete and then calls deletePost
    
  
    // This function figures out which post we want to edit and takes it to the appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("song");
      window.location.href = "/API?song_id=" + currentSong.id;
    }
  
    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
    //   if (id) {
    //     partial = " for Author #" + id;
    //   }
    songContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No songs yet");
      songContainer.append(messageH2);
    }
  
  });
  