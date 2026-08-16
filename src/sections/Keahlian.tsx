import keahlianTitle from "../assets/title/keahlian-title.png";

export function Keahlian() {
  return (
    <section className="content-section">
      <p className="section-part">BAGIAN III</p>
      <img
        className="section-title"
        style={{ width: "140px" }}
        src={keahlianTitle}
        alt="Keahlian"
      />
    </section>
  );
}
