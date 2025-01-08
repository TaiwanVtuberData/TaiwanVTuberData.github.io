import * as AdvertisementApi from '../../services/AdvertisementService';
import { AdvertisementDetail } from '../../services/AdvertisementService';
import style from './style.module.css';
import { FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

interface AdvertisementProps {}

const Advertisement: FunctionalComponent<AdvertisementProps> = (
  props: AdvertisementProps,
) => {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle the image loading completion
  const handleImageLoad = () => {
    setLoading(false);
  };

  const [advertisementDetail, setAdvertisementDetail] =
    useState<AdvertisementDetail | null>(null);

  const getAdvertisementDetail = async (): Promise<void> => {
    await AdvertisementApi.getAdvertisementDetail().then((res) => {
      setAdvertisementDetail(res.data);
    });
  };

  useEffect(() => {
    getAdvertisementDetail();
  }, []);

  // Trigger a layout reflow after the image is loaded
  useEffect(() => {
    if (!loading && containerRef.current && imageRef.current) {
      // Ensure the container height expands smoothly
      containerRef.current.style.maxHeight = `${imageRef.current.height + 20}px`; // Adds some space around image
    }
  }, [loading]);

  return advertisementDetail?.hasAdvertisement === true ? (
    <a
      class={style.advertisement}
      href={advertisementDetail.advertisement?.url ?? ''}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageContainer} ref={containerRef}>
        <img
          src={advertisementDetail.advertisement?.imgUrl}
          onLoad={handleImageLoad}
          class={`${style.image} ${loading ? style.imageLoading : style.imageLoaded}`}
          ref={imageRef}
        />
      </div>
    </a>
  ) : (
    <></>
  );
};

export default Advertisement;
