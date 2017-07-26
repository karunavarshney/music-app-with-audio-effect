//loop variables
var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon
// js file

// objects for songList
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'songs/song1.mp3',
       'image':'image1.jpeg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'songs/song2.mp3',
         'image':'image2.jpeg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'songs/song3.mp3',
         'image':'image3.jpeg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'songs/song4.mp3',
         'image':'image4.jpeg'
    },
    {
            'name': 'naav chadhti lehrey laang na paye',
            'artist': 'Mohit',
            'album': 'Udaan',
            'duration': '4:16',
           'fileName': 'songs/song5.mp3',
           'image':'image5.jpeg'
        },
      {
          'name': 'Tere sang yaara',
          'artist': 'Atif aslam',
          'album': 'Rustom',
          'duration': '4:51',
          'fileName': 'songs/song6.mp3',
          'image':'image6.jpg'
        },
      {
          'name': 'bulleya',
          'artist': 'Amit mishra',
          'album': 'Ae Dil Hai Mushkil',
          'duration': '5:49',
         'fileName': 'songs/song7.mp3',
         'image':'image7.jpeg'
      },
        {
            'name': 'Bolna',
            'artist': 'Taniskh bagchi',
            'album': 'Kapoor and Sons',
            'duration': '3:33',
            'fileName': 'songs/song8.mp3',
            'image':'image8.jpeg'
          },

      {
        'name': 'Kabira',
        'artist': 'Arijit Singh',
        'album': 'Yeh jawani hai dewani',
        'duration': '4:30',
        'fileName': 'songs/song9.mp3',
        'image':'image9.jpeg'
      },

      {
         'name': 'Sanam Re',
        'artist': 'Arijit singh',
        'album': 'Sanam re',
        'duration': '5:08',
        'fileName': 'songs/song10.mp3',
        'image':'image10.jpg'
      },

      {
      'name': 'Jiya Tu',
      'artist': 'Neha Kakkar',
      'album': 'Kings',
      'duration': '5:22',
      'fileName': 'songs/song11.mp3',
      'image':'image11.jpeg'
    },

    {
      'name': 'Ye sham mastani',
        'artist': 'Kishor kumar ',
        'album': 'kati patang',
        'duration': '4:41',
        'fileName': 'songs/song12.mp3',
          'image':'image12.jpeg'
      }

  ]



          window.onload = function() {
    // adding info about song
              for(var i =0; i < songs.length;i++) {
                var obj = songs[i];
                var name = '#song' + (i+1);
                var song = $(name);
                song.find('.song-name').text(obj.name);
                song.find('.song-artist').text(obj.artist);
                song.find('.song-album').text(obj.album);
                song.find('.song-length').text(obj.duration);
                addSongNameClickEvent(obj,i+1);
              }

              updateCurrentTime();
              setInterval(function() {
              updateCurrentTime();
              },1000);
            // initially to show something in image of a song
               changeCurrentSongDetails(songs[0]);
               $('#songs').DataTable({
                  paging:false,
                   language: {
                                      searchPlaceholder: "Search"
                                  },
                        scrollY:250,            //adding scrollbar
                        deferRender:true
                 }
               );
            }


    //changing song detail like image ,albumname ,artist name
    function changeCurrentSongDetails(songObj) {
      $('.current-song-image').attr('src','img/' + songObj.image)
       $('.current-song-name').text(songObj.name)
       $('.current-song-album').text(songObj.album)
    }


     var songNumber=1;


        function addSongNameClickEvent(songObj ,position) {
          var songName = songObj.fileName; // New Variable
           var id = '#song' + position;
        $(id).click(function() {
          var audio = document.querySelector('audio');
          var currentSong = audio.src;
        if(songNumber!== position)
        {
        audio.src=songName;
        songNumber=position;
        }

            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call


          });
        }
              //calling for each  song the function so as each function can be played or paused
              // for (var i = 0; i < fileNames.length ; i++) {
              //      addSongNameClickEvent(fileNames[i],i+1)
              //   }


// to make the time in correct form for the progree report


  function fancyTimeFormat(time)
    {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
    }

  // function for play and pause the song
      function toggleSong() {
      var song = document.querySelector('audio');
      if(song.paused == true) {
      console.log('Playing');
      $('.play-icon').removeClass('fa-play').addClass('fa-pause');
      song.play();
      }
      else {
      console.log('Pausing');
      $('.play-icon').removeClass('fa-pause').addClass('fa-play');
      song.pause();
      }
      }
// current time k liye hai
function updateCurrentTime() {              //function to change the current time and duration of different song
  var song = document.querySelector('audio');
  //console.log(song.currentTime);
  //console.log(song.duration);
  var currentTime=Math.floor(song.currentTime);
  var duration=Math.floor(song.duration);
  var bar=(currentTime*100)/duration;
  currentTime = fancyTimeFormat(currentTime);
  duration = fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
  Progressbar(bar);
}


    function Progressbar(bar){                  // function to make the progressbar filled when the song is playing
              var ele = document.querySelector('.progress-filled');
              ele.style.width= bar +"%";
              console.log(bar);
        }
        function changeVolume(val){
                   var aud=document.querySelector('audio');
                   aud.volume=val;
                   if(val==0)
                   {
                       $('.favolume').addClass('fa-volume-off').removeClass('fa-volume-up')
                      // console.log('volume0')
                   }
                   else {
                     $('.favolume').addClass('fa-volume-up').removeClass('fa-volume-off')
                    // console.log('volume high');
                   }
            }

            $('.player-progress').click(function(event){
               var $this=$(this);
               var widthclicked= event.pageX-$this.offset().left;
               //console.log(event.pageX);  gives the position from left whereever clicked
               //console.log($this.offset().left);      gives the positon from left where 'this' start and always fixed
               //console.log(widthclicked);
               var totalwidth=$this.width();
               //console.log(totalwidth);           gives the total width of the player and always fixed
               var width=(widthclicked/totalwidth)*100;
               var song=document.querySelector('audio');
               song.currentTime=(song.duration*width)/100;
               //console.log(song.currentTime);
             });


             //Js for Volume icon
              $('#volume1').on('change',function(){
                  changeVolume(this.value);
              });
              $('.favolume').hover(function(){
                  $('#volume1').removeClass('hidden')
                  $('#volume1').mouseleave(function(){
                    $('#volume1').addClass('hidden')
                  })
              });
              $('.favolume').on('click',function(){
                   changeVolume(mute);
                  // $('#volume1').slider({value:0});
                  mute=1-mute;
              });


        // $('.welcome-screen button').on('click', function() {
        function welcome(){
        var name = $('#name-input').val();
        if (name.length > 3)
        {
                var message = "Welcome, " + name;
                $('.main .user-name').text(message);
                $('.welcome-screen').addClass('hidden');
                $('.main').removeClass('hidden');
        }
         else {
              $('#name-input').addClass('error');
          }
        }
        $('body').on('keypress', function(event) {
            var target = event.target;
            if (event.keyCode == 13  ) {
            welcome();
            }
        });
        $('.play-icon').on('click', function() {
            toggleSong();
        });



        $('body').on('keypress', function(event) {
            var target = event.target;
            if (event.keyCode == 32 && target.tagName !='INPUT') {
            toggleSong();
            }
        });

        // for the looping of the songs
        $('.fa-repeat').on('click',function() {
            $('.fa-repeat').toggleClass('disabled')
            willLoop = 1 - willLoop;
        });
//for shuffle icon
        $('.fa-random').on('click',function() {
            $('.fa-random').toggleClass('disabled')
            willShuffle = 1 - willShuffle;
        });
//time jump
        function timeJump() {
            var song = document.querySelector('audio')
            song.currentTime = song.duration - 5;
        }

        // to change the song after one ends
        $('audio').on('ended',function() {
      var audio = document.querySelector('audio');
      if (willShuffle == 1) {
          var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
          var nextSongObj = songs[nextSongNumber-1];
          audio.src = nextSongObj.fileName;
          toggleSong();
          changeCurrentSongDetails(nextSongObj);
          currentSongNumber = nextSongNumber;
      }
      else if(currentSongNumber < 4) {
          var nextSongObj = songs[currentSongNumber];
          audio.src = nextSongObj.fileName;
          toggleSong();
          changeCurrentSongDetails(nextSongObj);
          currentSongNumber = currentSongNumber + 1;
      }
      else if(willLoop == 1) {
          var nextSongObj = songs[0];
          audio.src = nextSongObj.fileName;
          toggleSong();
          changeCurrentSongDetails(nextSongObj);
          currentSongNumber =  1;
      }
      else {
          $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          audio.currentTime = 0;
      }
  });
//random no generator
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}
//to forward song
$('.fa-step-forward').on('click',function(){
                  var audio=document.querySelector('audio');
                  if(songNumber<songs.length)
                  {
                      var next=songs[songNumber];
                      audio.src=next.fileName;
                      changeCurrentSongDetails(next);
                      toggleSong();
                      songNumber++;
                    }
                   else {
                       var next=songs[0];
                       audio.src=next.fileName;
                       changeCurrentSongDetails(next);
                       toggleSong();
                       songNumber=1;
                   }
                });
                $('.fa-step-backward').on('click',function(){
                  var audio=document.querySelector('audio');
                  if(songNumber>1)
                  {
                      var prev=songs[songNumber-2];
                      audio.src=prev.fileName;
                      changeCurrentSongDetails(prev);
                      toggleSong();
                      songNumber--;
   //                   console.log(songNumber);
                    }
                   else {
                       var prev=songs[songs.length-1];
                       audio.src=prev.fileName;
                       changeCurrentSongDetails(prev);
                       toggleSong();
                       songNumber=songs.length;
                   }
                });

//T     U         N           A

function effects_clicked(id1){
      $(id1).toggleClass('clicked');
      // console.log('clicked');
    }

// var wahwah;
//   var convolver;
//   var cabinet;
//   var overdrive;
//   var compressor;
//   function tunaDemo(){
//
//     var tuna = new Tuna(context);
//
//     wahwah = new tuna.WahWah({
//     automode: true,                //true/false
//     baseFrequency: 0.5,            //0 to 1
//     excursionOctaves: 2,           //1 to 6
//     sweep: 0.6,                    //0 to 1
//     resonance: 100,                 //1 to 100
//     sensitivity: 0.5,              //-1 to 1
//     bypass: 1
//     });
//     convolver = new tuna.Convolver({
//     highCut: 100,                         //20 to 22050
//     lowCut: 22050,                             //20 to 22050
//     dryLevel: 0.5,                            //0 to 1+
//     wetLevel: 1,                            //0 to 1+
//     level: 0,                               //0 to 1+, adjusts total output of both wet and dry
//     impulse: "impulse_rev.wav",    //the path to your impulse response
//     bypass: 1
//     });
//     cabinet = new tuna.Cabinet({
//     makeupGain: 10,                                 //0 to 20
//     impulsePath: "impulse1.mp3",    //path to your speaker impulse
//     bypass: 1
//     });
//     overdrive = new tuna.Overdrive({
//     outputGain: 0.5,         //0 to 1+
//     drive: 0.7,              //0 to 1
//     curveAmount: 1,          //0 to 1
//     algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
//     bypass: 1
//     });
//     pingPongDelay = new tuna.PingPongDelay({
//     wetLevel: 0.5, //0 to 1
//     feedback: 0.3, //0 to 1
//     delayTimeLeft: 150, //1 to 10000 (milliseconds)
//     delayTimeRight: 200 //1 to 10000 (milliseconds)
//     });
//     filter = new tuna.Filter({
//     frequency: 22050, //20 to 22050
//     Q: 1, //0.001 to 100
//     gain: 0, //-40 to 40 (in decibels)
//     filterType: "notch", //lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass
//     bypass: 1
//     });
//     compressor = new tuna.Compressor({
//     threshold: -42,    //-100 to 0
//     makeupGain: 1,     //0 and up (in decibels)
//     attack: 30,         //0 to 1000
//     release: 0,        //0 to 3000
//     ratio: 4,          //1 to 20
//     knee: 5,           //0 to 40
//     automakeup: true,  //true/false
//     bypass: 1
//     });
//   }
//
//       var context= new AudioContext();
//       tunaDemo();
//       var song =document.querySelector('audio');
//       var source = context.createMediaElementSource(song);
//       //var source=context.createBufferSource();
//       source.connect(wahwah.input);
//       source.connect(convolver.input);
//       source.connect(cabinet.input);
//       source.connect(overdrive.input);
//       source.connect(compressor.input);
//       wahwah.connect(context.destination);
//       convolver.connect(context.destination);
//       cabinet.connect(context.destination);
//       overdrive.connect(context.destination);
//       compressor.connect(context.destination);
//
//       var button = document.querySelector('#wahwah');
//       var button4 = document.querySelector('#convolver');
//       var button5 = document.querySelector('#cabinet');
//       var button8 = document.querySelector('#overdrive');
//       var button11 = document.querySelector('#compressor');
//
//       button.addEventListener("click",function(e){
//           effects_clicked(button);
//           if(wahwah.bypass){
//             wahwah.bypass=false;
//             console.log("wahwah on");
//           }
//           else{
//             wahwah.bypass=true;
//             console.log("wahwah off");
//           }
//       });
//         button4.addEventListener("click",function(e){
//           effects_clicked(button4);
//              if(convolver.bypass){
//                convolver.bypass=false;
//                console.log("convolver on");
//              }
//              else{
//                convolver.bypass=true;
//                console.log("convolver off");
//              }
//          });
//          button5.addEventListener("click",function(e){
//            effects_clicked(button5);
//               if(cabinet.bypass){
//                 cabinet.bypass=false;
//                 console.log("echo on");
//               }
//               else{
//                 cabinet.bypass=true;
//                 console.log("echo off");
//               }
//           });
//             button8.addEventListener("click",function(e){
//               effects_clicked(button8);
//                  if(overdrive.bypass){
//                    overdrive.bypass=false;
//                    console.log("overdrive on");
//                  }
//                  else{
//                    overdrive.bypass=true;
//                    console.log("overdrive off");
//                  }
//              });
//                button11.addEventListener("click",function(e){
//                  effects_clicked(button11);
//                     if(compressor.bypass){
//                       compressor.bypass=false;
//                       console.log("vibration on");
//                     }
//                     else{
//                       compressor.bypass=true;
//                       console.log("vibration off");
//                     }
//                 });
