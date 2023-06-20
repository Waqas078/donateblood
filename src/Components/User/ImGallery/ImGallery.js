import WSPGallery from "./WSPGallery";
import "./wsp-gallery.css";
function ImGallery() {
  const galleryImages = [
    {
      img: "",
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="Gallery">
      <br />
      <div className="section-head col-sm-12">
        <h4>
          <span>CAMPAIGN</span> GALLERY
        </h4>
      </div>
      <br />
      <br />

      <WSPGallery galleryImages={galleryImages} />

      <br />
      <br />
      <div></div>
    </div>
  );
}

export default ImGallery;
