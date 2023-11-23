// media social login
document.addEventListener("DOMContentLoaded", function() {
    function saveDataMedsosStorage(data) {
      localStorage.setItem('idnmedsosData', JSON.stringify(data));
      localStorage.setItem('lastFetchTime', new Date().getTime());
    }
  
    function getDataMedsosLocalStorage() {
      var storedData = localStorage.getItem('idnmedsosData');
      var lastFetchTime = localStorage.getItem('lastFetchTime');
  
      if (storedData && lastFetchTime) {
        var currentTime = new Date().getTime();
        var timeDifference = currentTime - parseInt(lastFetchTime);
        var twentyFourHours = 24 * 60 * 60 * 1000;
  
        if (timeDifference < twentyFourHours) {
          var parsedData = JSON.parse(storedData);
          useDataMedsosLocalStorage(parsedData);
          return;
        }
      }
  
      getDataMedsosAPI();
    }
  
    function useDataMedsosLocalStorage(data) {
      var roma4dEntry = data.find(function (entry) {
        return entry.website === 'POINIJITU';
      });
  
      if (roma4dEntry) {
        var facebookURL = roma4dEntry.facebook;
        var whatsappURL = roma4dEntry.whatsapp;
        var telegramURL = roma4dEntry.telegram;
        var lineURL = roma4dEntry.line;
        var instagramURL = roma4dEntry.instagram;
  
        var objectMedsosidn = $('<div class="detailfooter">' +
      '<img class="daport" src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685754/poinjitu/poin%20images/footer_uuvtse.png" alt="">' +
      '<div class="grpfooter">' +
      '<div class="grpcontact">' +
      '<h6>Hubungi Kami</h6>' +
      '<div class="contactpft">' +
      '<a href="'+ facebookURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685831/poinjitu/poin%20images/fb-icon_nojlko.png" alt=""> Facebook</a>' +
      '<a href="'+ whatsappURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685831/poinjitu/poin%20images/wa-icon_ftfqfj.png" alt=""> Whatsapp</a>' +
      '<a href="'+ telegramURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/tele-icon_rzoxlp.png" alt=""> Telegram</a>' +
      '<a href="'+ lineURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/line-icon_boijzm.png" alt=""> Line</a>' +
      '<a href="'+ instagramURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/instagram-icon_zwexen.png" alt=""> Instagram</a>' +
      '</div>' +
      '</div>' +
      '<div class="grpcontact">' +
      '<h6>Quick Menu</h6>' +
      '<div class="menupft">' +
      '<a href="index.php">Home</a>' +
      '<a href="promotion.php">Promosi</a>' +
      '<a href="https://rtpmentarijitu.com/" target="_blank">RTP</a>' +
      '<a href="#prediksi" target="_blank">Prediksi Togel</a>' +
      '<a href="/latest_news.php?id=9444">Jadwal Togel</a>' +
      '<a href="https://prediksisahabatgroup.id/" target="_blank">Bukti Jackpot</a>' +
      '<a href="how-to-play.php">Cara Bermain</a>' +
      '<a href="hasil_lengkap.php">History Nomor</a>' +
      '<a href="bukumimpi.php">Buku Mimpi</a>' +
      '<a href="inforeferral.php">Refferal</a>' +
      '</div>' +
      '</div>' +
      '<div class="grpcontact">' +
      '<h6>Games</h6>' +
      '<div class="gamespft">' +
      '<a href="index.php" target="_blank">Togel</a>' +
      '<a href="index.php" target="_blank">Slot</a>' +
      '<a href="index.php" target="_blank">Live Game</a>' +
      '<a href="index.php" target="_blank">Table Games</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>');
        
        $('#footer .footer-bottom').before(objectMedsosidn);
      } else {
        console.log('Data not found.');
      }
    }
  
    function getDataMedsosAPI() {
      $.ajax({
        url: 'https://res.cloudinary.com/dtfkorlcr/raw/upload/v1700686497/poinjitu/assets/dataweb_pvppnk.css',
        type: 'GET',
        // headers: {
        //   'postman-token': '54a06989-9a14-4515-afca-766a0f6f3dd9'
        // },
        success: function (response) {
          var data = response.data;
          saveDataMedsosStorage(data);
          useDataMedsosLocalStorage(data);
        },
        error: function (error) {
          console.error('Error while fetching data from API:', error);
          if (!objectMedsosidn) {
              var objectMedsosidn = $('<div class="detailfooter">' +
      '<img class="daport" src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685754/poinjitu/poin%20images/footer_uuvtse.png" alt="">' +
      '<div class="grpfooter">' +
      '<div class="grpcontact">' +
      '<h6>Hubungi Kami</h6>' +
      '<div class="contactpft">' +
      '<a href="'+ facebookURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685831/poinjitu/poin%20images/fb-icon_nojlko.png" alt=""> Facebook</a>' +
      '<a href="'+ whatsappURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685831/poinjitu/poin%20images/wa-icon_ftfqfj.png" alt=""> Whatsapp</a>' +
      '<a href="'+ telegramURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/tele-icon_rzoxlp.png" alt=""> Telegram</a>' +
      '<a href="'+ lineURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/line-icon_boijzm.png" alt=""> Line</a>' +
      '<a href="'+ instagramURL +'" target="_blank"><img src="https://res.cloudinary.com/dtfkorlcr/image/upload/v1700685832/poinjitu/poin%20images/instagram-icon_zwexen.png" alt=""> Instagram</a>' +
      '</div>' +
      '</div>' +
      '<div class="grpcontact">' +
      '<h6>Quick Menu</h6>' +
      '<div class="menupft">' +
      '<a href="index.php">Home</a>' +
      '<a href="promotion.php">Promosi</a>' +
      '<a href="https://rtpmentarijitu.com/" target="_blank">RTP</a>' +
      '<a href="#prediksi" target="_blank">Prediksi Togel</a>' +
      '<a href="/latest_news.php?id=9444">Jadwal Togel</a>' +
      '<a href="https://prediksisahabatgroup.id/" target="_blank">Bukti Jackpot</a>' +
      '<a href="how-to-play.php">Cara Bermain</a>' +
      '<a href="hasil_lengkap.php">History Nomor</a>' +
      '<a href="bukumimpi.php">Buku Mimpi</a>' +
      '<a href="inforeferral.php">Refferal</a>' +
      '</div>' +
      '</div>' +
      '<div class="grpcontact">' +
      '<h6>Games</h6>' +
      '<div class="gamespft">' +
      '<a href="index.php" target="_blank">Togel</a>' +
      '<a href="index.php" target="_blank">Slot</a>' +
      '<a href="index.php" target="_blank">Live Game</a>' +
      '<a href="index.php" target="_blank">Table Games</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>');
        
        $('#footer .footer-bottom').before(objectMedsosidn);
          }
        }
      });
    }
  
    getDataMedsosLocalStorage();
  });