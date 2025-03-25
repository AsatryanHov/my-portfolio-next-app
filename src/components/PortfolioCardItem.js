import Image from "next/image";

function PortfolioCardItem({ link, img, alt, title, descr }) {
  return (
    <div className="card">
      <a href={link} className="card-link" target="_blank" rel="noreferrer">
        <div className="card-img-container">
          <Image
            src={img}
            alt={alt}
            width={420} // Adjust based on your design
            height={300} // Adjust based on your design
            className="card-img"
            priority={true} // Optional for above-the-fold content
          />
        </div>
        <h3 className="card-title">{title}</h3>
        <p>{descr}</p>
      </a>
    </div>
  );
}

export default PortfolioCardItem;

// function PortfolioCardItem({ link, img, alt, title, descr }) {
//   return (
//     <div className="card">
//       <a href={link} className="card-link" target="_blank" rel="noreferrer">
//         <img className="card-img" src={img} alt={alt} />
//         <h3 className="card-title">{title}</h3>
//         <p>{descr}</p>
//       </a>
//     </div>
//   );
// }

// export default PortfolioCardItem;
