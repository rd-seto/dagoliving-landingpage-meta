document.getElementById('roiForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Mencegah reload page saat submit
  
  // Ambil nilai input dari form
  const hargaBeli = parseFloat(document.getElementById('harga-beli').value);
  const nilaiSewa = parseFloat(document.getElementById('nilai-sewa').value);
  const biayaOperasional = parseFloat(document.getElementById('biaya-operasional').value);
  const jumlahKamar = parseInt(document.getElementById('jumlah-kamar').value);
  
  // Validasi input
  if (isNaN(hargaBeli) || isNaN(nilaiSewa) || isNaN(biayaOperasional) || isNaN(jumlahKamar)) {
    alert("Silakan masukkan semua data dengan benar!");
    return;
  }
  
  // Menghitung total pendapatan tahunan (nilai sewa x jumlah kamar x 12 bulan)
  const totalPendapatanTahunan = nilaiSewa * jumlahKamar * 12;
  
  // Menghitung pendapatan bersih tahunan
  const pendapatanBersihTahunan = totalPendapatanTahunan - biayaOperasional;
  
  // Menghitung ROI
  const roi = (pendapatanBersihTahunan / hargaBeli) * 100;

  // Menentukan keterangan berdasarkan ROI
  let keterangan = '';
  if (roi > 12) {
    keterangan = "Anda mendapatkan return yang tinggi!";
  } else if (roi > 5) {
    keterangan = "ROI yang baik";
  } else {
    keterangan = "ROI rendah, sebaiknya pertimbangkan faktor lain sebelum berinvestasi.";
  }
  
  // Menampilkan hasil
  document.getElementById('roi-result').innerHTML = `
    <p>ROI: ${roi.toFixed(2)}% per tahun</p>
    <p>${keterangan}</p>
  `;
});

// Ambil semua tombol filter
const filterButtons = document.querySelectorAll('.filter-btn');
// Ambil semua item galeri
const galleryItems = document.querySelectorAll('.gallery-item');

// Tambahkan event listener ke setiap tombol
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Filter item galeri
    galleryItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
});

// Fungsi untuk membuka WhatsApp dengan pesan otomatis
function openWhatsApp(message) {
  const phoneNumber = '6281233007790'; // Ganti dengan nomor WhatsApp Anda (format: kode negara + nomor tanpa '+' atau spasi)
  const url = message 
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` 
    : `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');
}

// Fungsi untuk membuka WhatsApp dengan pesan tertentu
function openWhatsApp(message) {
  const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {

  // Fungsi untuk mengirimkan event ke Meta Pixel
  function sendPixelEvent(eventName) {
    if (typeof fbq !== 'undefined') {
      fbq('track', eventName); // Mengirimkan event ke Meta Pixel
      console.log(`Event ${eventName} telah dikirim ke Meta Pixel.`);
    } else {
      console.error('Meta Pixel tidak ditemukan!');
    }
  }

  // Tombol Brosur
  const brosurButton = document.getElementById('brosurButton');
  if (brosurButton) {
    brosurButton.addEventListener('click', function() {
      sendPixelEvent('BrosurClicked'); // Mengirimkan event saat tombol Brosur diklik
    });
  }

  // Tombol Hubungi Kami
  const hubungiButton = document.getElementById('hubungiButton');
  if (hubungiButton) {
    hubungiButton.addEventListener('click', function() {
      sendPixelEvent('HubungiKamiClicked'); // Mengirimkan event saat tombol Hubungi Kami diklik
    });
  }

  // Gambar Lokasi
  const lokasiGambar = document.getElementById('lokasiGambar');
  if (lokasiGambar) {
    lokasiGambar.addEventListener('click', function() {
      sendPixelEvent('GambarLokasiClicked'); // Mengirimkan event saat gambar diklik
    });
  }

  // Tombol Detail untuk Tipe Florence
  const detailFlorenceButton = document.getElementById('detailFlorence');
  if (detailFlorenceButton) {
    detailFlorenceButton.addEventListener('click', function() {
      sendPixelEvent('DetailFlorenceClicked'); // Mengirimkan event saat tombol Detail Florence diklik
    });
  }

  // Tombol Detail untuk Tipe Felice
  const detailFeliceButton = document.getElementById('detailFelice');
  if (detailFeliceButton) {
    detailFeliceButton.addEventListener('click', function() {
      sendPixelEvent('DetailFeliceClicked'); // Mengirimkan event saat tombol Detail Felice diklik
    });
  }

  // Tombol Detail untuk Tipe Victoria
  const detailVictoriaButton = document.getElementById('detailVictoria');
  if (detailVictoriaButton) {
    detailVictoriaButton.addEventListener('click', function() {
      sendPixelEvent('DetailVictoriaClicked'); // Mengirimkan event saat tombol Detail Victoria diklik
    });
  }

});
