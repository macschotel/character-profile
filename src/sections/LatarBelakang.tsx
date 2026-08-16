import { useState } from "react";
import latarBelakangTitle from "../assets/title/latar-belakang-title.png";

export function LatarBelakang() {
  const [currSlide, setCurrSlide] = useState(0);

  const slides = [
    <>
      <p>
        <span style={{ fontWeight: "bold" }}> ANAK PEREMPUAN ITU </span> selalu
        pulang ke rumah dengan luka lecet, karena jatuh dari sepeda atau
        pohon—atau apa saja yang jauh lebih tinggi darinya—dan bau matahari.
        Kalau dipakaikan kaos berwarna putih, umur warna putihnya itu tidak akan
        lama karena akan muncul cemong sana sini meski menurut si anak
        perempuan, itu adalah seni.
        <br />
        <br />
        Namanya Baraswari Wisanggeni Muljoto.
        <br />
        <br />
        <span className="italic-word">Wisanggeni</span>, pada hakikatnya, memang
        tidak lazim digunakan sebagai nama anak perempuan. Tapi, apa boleh buat,
        Raka Prawira Muljoto sudah kadung memberi nama anaknya dengan tokoh
        wayang favoritnya. Enggan pula ia untuk melepasnya. Lagipula, ini bukan
        kesalahannya. Jika ada pihak yang harus ia salahkan, maka itu adalah
        takdir, atau Tuhan, atau Dewa—pokoknya, sang eksistensi pencipta
        kehidupan—yang sembarangan mempermainkan jenis kelamin anaknya. Setelah
        berbulan-bulan dibuat yakin bahwa janin yang hidup di dalam rahim
        istrinya, Sekar Arum Tan, adalah seorang lelaki, siapa sangka yang lahir
        malah perempuan! Perlu dicatatat pula, tiga buah hati yang lebih dahulu
        hadir ke dunia adalah lelaki. Pun dengan buah hati yang lahir beberapa
        tahun setelah Ara—begitu keduanya memanggil sang putri satu-satunya—ia
        juga seorang laki-laki!
        <br />
        <br />
        Ah, sudahlah. Membahas tentang bagaimana Raka dan Sekar dijahili oleh
        entitas pencipta memang tak akan ada habisnya. Lagipula, laki-laki atau
        perempuan, mereka tetap mencintai Ara sama besarnya dengan empat putra
        mereka yang lain.
      </p>
    </>,
    <>
      <p>
        Tetapi, untuk masalah energi yang meledak-ledak, rantai sepeda yang
        selalu lepas, luka lecet di lutut dan siku, bau asam bercampur matahari
        serta bintik-bintik coklat di wajah yang muncul karena seharian
        berlarian di bawah terik; entah siapa yang harus disalahkan. Raka dan
        Sekar memang memiliki seorang anak perempuan, tetapi kenapa rasanya
        seperti memiliki lima anak laki-laki!?
        <br />
        <br />
        Sekali lagi, terlepas dari bagaimana wujud sang putri satu-satunya,
        kasih sayang mereka tidak lantas surut. Barangkali mendaftarkan Ara ke
        sebuah pondok pelatihan bela diri bisa menjadi keputusan yang tepat—dan
        mereka memang tepat soal ini. Siapa yang mengira Ara, si bocah yang
        setiap pulang sekolah selalu menolak untuk tidur siang, justru
        menyenangi olahraga bela diri! Syukurlah, kini Raka dan Sekar bisa
        bernapas lebih lega.
        <br />
        <br />
        Ara tumbuh besar menjadi seorang gadis yang ceria. Tak pernah ada satu
        pun hari yang ia lewati tanpa bercerita tentang teman-teman sekolahnya,
        atau temannya teman yang dikenalkan padanya, atau teman dari temannya
        teman yang berpapasan dengannya di depan dojo aikido—ia punya terlalu
        banyak teman dan … juga punya terlalu banyak rasa keadilan. Barangkali
        menurun dari Ayahnya yang seorang pengacara? Bisa jadi. Rasa keadilan
        yang besar itu membuatnya menjadi kawan untuk semua orang sekaligus
        musuh bagi beberapa orang sebab dianggap{" "}
        <span className="italic-word">ikut campur</span>.
      </p>
    </>,
    <>
      <p>
        Memang, apa sih kemungkinan paling buruk dianggap berisik dan ikut
        campur oleh sekelompok orang?
        <br />
        <br />
        Ya, tidak terlalu buruk. Mungkin. Hanya dipukuli dan ditendangi oleh
        empat orang laki-laki seusianya, sekaligus menjadi tontonan tiga orang
        perempuan (sepertinya ada sesuatu yang salah dengan otak mereka.
        Bagaimana seseorang bisa merasa begitu terhibur melihat tindak
        kekerasan? Sampai detik ini, Ara masih tidak mengerti). Baraswari ini
        memang ahlinya bela diri, tapi bukan berarti ia{" "}
        <span className="italic-word">seahli</span>
        itu sampai mampu melawan empat orang laki-laki tinggi besar seorang
        diri! Kalau bukan karena pertolongan seorang Taruna yang tiba-tiba
        muncul—entah dari mana, barangkali{" "}
        <span className="italic-word"> ting </span> datang secara misterius,
        turun dari langit, seperti di drama-drama Korea yang sering disaksikan
        oleh teman-teman sekelas Ara—entah apa yang terjadi pada Ara kini.
        Mungkin ia tidak akan memiliki alasan yang cukup dalam untuk menjadi
        semakin kuat. Tak akan pernah muncul sebuah seruan yang berkobar-kobar
        dalam hatinya bahwa ia ingin menjadi kuat untuk banyak orang, seperti
        yang dilakukan oleh Taruna tersebut. Selepas meninggalkan bangku SMA,
        A-AFTER THE WAR I WENT BACK TO NEW YORK I FINISHED UP MY STUDIES AND I
        PRACTICE LAW I PRACTICE LAW BURR WORKED NEXT DOOR ALIAS LANJUT ENTAR.
      </p>
    </>,
  ];

  const nextSlide = () => {
    setCurrSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="content-section">
      <p className="section-part">BAGIAN IV</p>
      <img
        className="section-title"
        style={{ width: "180px" }}
        src={latarBelakangTitle}
        alt="Latar Belakang"
      />
      <div className="story-slider">
        <div className="content-info story-content">{slides[currSlide]}</div>
        <div className="story-navigation">
          <button
            className="story-arrow"
            onClick={prevSlide}
            aria-label="Previous"
          >
            ←
          </button>

          <button className="story-arrow" onClick={nextSlide} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
