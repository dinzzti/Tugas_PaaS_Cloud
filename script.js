// Daftar kata-kata atau vibe
const vibes = [
    "Jalani hari ini dengan semangat seperti lagu debut! 🎵",
    "Jangan lupa istirahat, idolamu juga butuh tidur! 💤",
    "Streaming boleh, tapi tugas harus selesai ya! 💻",
    "Hari ini pasti berjalan lancar, fighting! ✨"
];

function generateVibe() {
    // Memilih angka acak berdasarkan jumlah data di dalam array 'vibes'
    const randomIndex = Math.floor(Math.random() * vibes.length);
    
    // Mengubah teks di HTML
    document.getElementById("quoteDisplay").innerText = vibes[randomIndex];

    // Memberikan efek animasi berkedut sedikit pada kartu saat tombol diklik
    const card = document.querySelector('.card');
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 150);
}