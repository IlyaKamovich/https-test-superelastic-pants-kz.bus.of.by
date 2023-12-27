import { FC } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';

import 'lightbox.js-react/dist/index.css';
import './size-section.scss';

const SizeSection: FC = () => {
  return (
    <section id="size" className="size">
      <div className="container">
        <h2 className="size-title">как выбрать размер</h2>
        <div className="size-images">
          <SlideshowLightbox>
            <img style={{ objectFit: 'contain' }} src={'images/size.png'} className="photo" alt="rate" />
          </SlideshowLightbox>
        </div>
      </div>
    </section>
  );
};

export default SizeSection;
