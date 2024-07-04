document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // input form
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value.trim();

    // Cek
    if (!name || !dob || !gender || !message) {
        alert('Harap isi semua data sebelum mengirim.');
        return;
    }

    // data yang sudah disubmit
    document.getElementById('submitted-name').innerText = name;
    document.getElementById('submitted-dob').innerText = dob;
    document.getElementById('submitted-gender').innerText = gender.value;
    document.getElementById('submitted-message').innerText = message;
    
    // Tampilkan waktu saat ini
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString();

    // Reset formulir
    document.getElementById('contactForm').reset();
});
