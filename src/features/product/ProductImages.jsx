import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const ImageContainer = styled.div`
  & figure {
    width: 100%;
    height: 50rem;
    margin-bottom: 4.8rem;
  }

  & img {
    width: 70%;
    height: 100%;
    object-fit: cover;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & img {
      width: 20%;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

function ProductImages({ img, otherImgs, description }) {
  const { pathname } = useLocation();
  const images = [img, ...otherImgs];

  const [activeImg, setActiveImg] = useState(img);

  useEffect(() => {
    setActiveImg(img);
  }, [pathname, img]);

  return (
    <ImageContainer>
      <figure>
        <img src={activeImg} alt={`Photography of ${description}`} />
      </figure>

      <div>
        {images.map((image) => (
          <img
            src={image}
            alt={`Photography of ${description}`}
            key={image}
            onClick={() => setActiveImg(image)}
          />
        ))}
      </div>
    </ImageContainer>
  );
}

export default ProductImages;
