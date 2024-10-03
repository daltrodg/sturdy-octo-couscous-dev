// // A $( document ).ready() block.
// $( document ).ready(function() {
   
//   loadSongData("songList");
  
//   addEvents(); 
 
// });

// function loadSongData(appendId) {

//   let appendElement = $(`#${appendId}`);

//   appendElement.empty(); 
 
//   $.each(data.songs, (index, song)=>{

//     // console.log(song); 
//       // $('<li>')
//       //   .attr('id', `songNo${index}`)
//       //   .addClass('list-group-item')
//       //   .addClass('list-group-item-action')
//       //   .html(`${song.name}, <em>${song.artist}</em>`)
//       //   .appendTo(appendElement);

//    appendElement.append(` 
//     <li id="songNo${index}Name" class="list-group-item mb-1 songName">
//       ${song.name} 
    
//       <ul class="list-group songDetails">
//         <li class="input-group w-100">
//           <span class="w-20 input-group-text">artist</span>
//            <input id="songNo${index}ArtistEdit" name="artist" type="text" class="form-control editSong" value="${song.artist}">
//         </li>
//         <li class="input-group w-100">
//           <span class="w-20 input-group-text">Links</span>
        
//           <input id="songNo${index}Links" type="text" name="links" class="form-control editSong" value="${song.links}">
//         </li>
//       </ul>
//     </li>`); 

//     $('.songDetails').hide();
//     $('input.editSong').prop('readonly', true); 
   
//   });
 

// }

      $('.songName').on('click', (e)=>{
    
       let $this = $(e.target); 
       let $thisId = $this.attr('id');
    
       $('#'+ $thisId + ' > ul.songDetails').toggle(); 

    
       $('#'+ $thisId + '> i.editSong').toggle(); 

      }); 

     $('#btnHideAll').on('click', (e)=> {

       $('ul.songDetails').hide();
     });
  
     $('#btnShowAll').on('click', (e)=> {

       $('ul.songDetails').show();
     });

//   $('input.editSong').on('click', (e)=> {

//     console.log(e.target); 
//     let $this = $(e.target); 
//     $this.prop('readonly', false); 

//   })

//   $('#btnSaveSong').on('click', ()=>{

//     data.songs.push({ 
//       name : $('#songAddName').val(), 
//       artist : $('#songAddArtist').val(),
//       status : $('#songAddStatus').val(), 
//       next : $('#songAddNext').val(), 
//       chords : $('#songAddChords').val(),
//       lyrics : $('#songAddLyrics').val(), 
//       notes: $('#songAddNotes').val(),
//       tags: $('#songAddTagws').val(),
//       links: $('#songAddLinks').val(), 
//       onSpotify : false 
//     }); 
  
//     loadSongData("songList");
//     addEvents(); 

//     $('#addSongModal .btn-close').click() 
//     $('#addSongModal input').val(''); 
    

//   });


//   $('input.editSong').on('blur', (e)=> {

//     let $this = $(e.target); 
//     let $thisId = $this.attr('id'); 
//     let $thisKey = $this.attr('name');
//      console.log($thisKey); 
 
//     let regexDigit = /\d+/g;
//     let songIndex = $thisId.match(regexDigit)[0]; 


//     data.songs[songIndex][$thisKey] = $this.val(); 

//     $(e.target).prop('readonly', true); 
     
//   }); 


//   $('#btnConsoleData').on('click', ()=>{

//     console.log(data.songs); 

//   })

// }