import biodataTitle from "../assets/title/biodata-title.png";
import characterPics1 from "../assets/character-pics/1.jpg";
import characterPics2 from "../assets/character-pics/2.jpg";
import characterPics3 from "../assets/character-pics/3.jpg";
import characterPics4 from "../assets/character-pics/4.jpg";

export function Biodata() {
  return (
    <section className="content-section">
      <p className="section-part">BAGIAN I</p>
      <img className="section-title" src={biodataTitle} alt="Biodata" />

      <div className="content-photos">
        <img src={characterPics1} alt="" />
        <img src={characterPics2} alt="" />
        <img src={characterPics3} alt="" />
        <img src={characterPics4} alt="" />
      </div>

      <div className="content-info">
        <div className="content-row">
          <span>Nama Lengkap</span>
          <span>Baraswara Wisanggeni Muljoto</span>
        </div>

        <div className="content-row">
          <span>Nama Panggilan</span>
          <span>Baraswara, Ara, Ari</span>
        </div>

        <div className="content-row">
          <span>Tempat dan Tanggal Lahir</span>
          <span>Jakarta, 31 Juli 2000</span>
        </div>

        <div className="content-row">
          <span>Pekerjaan</span>
          <span>Inspektur Badan Perlindungan Hak Pendidikan Hidup</span>
        </div>

        <div className="content-row">
          <span>Afiliasi</span>

          <div className="biodata-affiliation">
            <ul>
              <li>Badan Perlindungan Hak Pendidikan</li>
              <li>Kementrian Pendidikan Dasar dan Menengah</li>
              <li>Komando Pasukan Khusus TNI Angkatan Darat (eks)</li>
              <li>Keluarga Muljoto</li>
            </ul>
          </div>
        </div>

        <div className="content-row">
          <span>Tinggi Badan</span>
          <span>188 cm</span>
        </div>

        <div className="content-row">
          <span>Berat Badan</span>
          <span>56 kg</span>
        </div>

        <div className="content-row">
          <span>Warna Rambut</span>
          <span>Hitam</span>
        </div>

        <div className="content-row">
          <span>Warna Mata</span>
          <span>Hitam Kecokelatan</span>
        </div>
      </div>
    </section>
  );
}
