function cekform() {
    // buat variabel untu menampung inputan
    id = document.getElementById('id');
    nama = document.getElementById('nama');
    jk = document.getElementById('jk');
    alamat = document.getElementById('alamat');
    var jk = document.getElementsByName('jk');
    var genValue = false;

    for (var i = 0; i < jk.length; i++) {
        if (jk[i].checked == true) {
            genValue = true;
        }
    }


    if (id.value == '') {
        alert('ID tidak boleh kosong!');
        nama.focus();
        return false;
    } else if (nama.value == '') {
        alert('Nama tidak boleh kosong');
        nama.focus();
        return false;
    } else if (nama.value.length <= 3) {
        alert('Nama minimal 3 karakter');
        nama.focus();
        return false;
    } else if (!genValue) {
        alert('Pilih Jenis Kelamin!');
        jk.focus();
        return false;
    } else {
        alert('Terimakasih telah mengisi form')
        return true;
    }
}
