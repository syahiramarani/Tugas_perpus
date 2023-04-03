function cekform() {
    // buat variabel untu menampung inputan
    idagt = document.getElementById('idagt');
    nade = document.getElementById('nade');
    nabe = document.getElementById('nabe');
    jk = document.getElementById('jenkel');
    alamat = document.getElementById('alamat');
    var jenkel = document.getElementsByName('jenkel');
    var genValue = false;

    for (var i = 0; i < jenkel.length; i++) {
        if (jenkel[i].checked == true) {
            genValue = true;
        }
    }


    if (idagt.value == '') {
        alert('ID tidak boleh kosong!');
        nade.focus();
        return false;
    } else if (nade.value == '') {
        alert('Nama tidak boleh kosong');
        nade.focus();
        return false;
    } else if (nabe.value == '') {
        alert('Nama tidak boleh kosong');
        nabe.focus();
        return false;
    } else if (nabe.value.length <= 3) {
        alert('Nama minimal 3 karakter');
        nabe.focus();
        return false;
    }else if (nade.value.length <= 3) {
        alert('Nama minimal 3 karakter');
        nade.focus();
        return false;
    } else if (!genValue) {
        alert('Pilih Jenis Kelamin!');
        jenkel.focus();
        return false;
    } else {
        alert('Terimakasih telah mengisi form')
        return true;
    }
}
