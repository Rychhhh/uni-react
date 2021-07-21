import main_bg from "../img/main.png";
import "./pages/mains.css";

export default function Socmed() {
  return (
    <div className="mt-5">
      {/* Konten Kiri */}
      <img src={main_bg} className="img-left mt-4"></img>
      {/* Konten Kanan */}
      <p>
        {/* Judul */}
        <h1 className="title me-2">My Social Media</h1>
        {/* Isi */}
        <div className="content me-5">
          <a className="twitter" href="https://twitter.com/Rayhan26901596">
            <i class="fab fa-twitter"></i>
          </a>
          <a className="instagram" href="https://www.instagram.com/spcyl_/">
            <i class="fab fa-instagram"></i>
          </a>
          <a className="github" href="https://github.com/Ryhann">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </p>
    </div>
  );
}
