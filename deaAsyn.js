// const token = 12343;



// function login(respon,callback) {


    
//    setTimeout(() => {

//     callback({respon,token})
//    }, 500)

// }

// function getKey(token){

    
//     setTimeout(() => {
//         console.log('a')
//         return 'a'
//     },500)
    

// }

// async function unduhGambarAsync() {
//     console.log("Mengunduh gambar pertama...");
//     // Simulasikan pengunduhan gambar pertama
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log("Gambar pertama diunduh.");
    
//     console.log("Mengunduh gambar kedua...");
//     // Simulasikan pengunduhan gambar kedua
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log("Gambar kedua diunduh.");
    
//     console.log("Semua gambar telah diunduh.");
//   }
  
//   unduhGambarAsync();
//   console.log("Kode berjalan terus.");

function unduhGambar() {
    console.log("Mengunduh gambar pertama...");
    // Simulasikan pengunduhan gambar pertama
    setTimeout(function() {
      console.log("Gambar pertama diunduh.");
      console.log("Mengunduh gambar kedua...");
      // Simulasikan pengunduhan gambar kedua
      setTimeout(function() {
        console.log("Gambar kedua diunduh.");
        console.log("Semua gambar telah diunduh.");
      }, 2000); // Waktu simulasi pengunduhan gambar kedua: 2 detik
    }, 2000); // Waktu simulasi pengunduhan gambar pertama: 2 detik
  }
  
  unduhGambar();
  console.log("Kode berjalan terus.");
      
  


