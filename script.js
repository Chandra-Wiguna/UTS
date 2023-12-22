document.getElementById('absenForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;

    // Kirim data absensi ke server menggunakan AJAX atau fetch API
    fetch('absen.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'nama=' + encodeURIComponent(nama) + '&kelas=' + encodeURIComponent(kelas),
    })
    .then(response => response.json())
    .then(data => {
        // Proses respons dari server
        console.log(data);

        // Tampilkan pesan sukses atau gagal
        var message = data.status === 'success' ? 'Absensi berhasil.' : 'Gagal melakukan absen. Silakan coba lagi.';
        showMessage(message);
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Terjadi kesalahan. Silakan coba lagi.');
    });
});

function showMessage(message) {
    // Sembunyikan formulir absen
    document.getElementById('absenForm').style.display = 'none';

    // Tampilkan pesan
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
}
