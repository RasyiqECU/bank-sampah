function hitung() {
    let kg = document.getElementById("kg").value;
    let harga = document.getElementById("jenis").value;

    if (kg === "" || kg <= 0) {
        document.getElementById("hasil").innerText =
            "Masukkan berat sampah yang valid!";
        return;
    }

    let total = kg * harga;

    document.getElementById("hasil").innerText =
        "Total Tabungan Anda: Rp " + total;
}
