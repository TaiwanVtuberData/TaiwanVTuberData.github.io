import * as AdvertisementApi from '../../services/AdvertisementService';
import { AdvertisementDetail } from '../../services/AdvertisementService';
import style from './style.module.css';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface AdvertisementProps {}

const Advertisement: FunctionalComponent<AdvertisementProps> = (
  props: AdvertisementProps,
) => {
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

  advertisementDetail?.hasAdvertisement === true;

  return advertisementDetail?.hasAdvertisement === true ? (
    <a
      class={style.advertisement}
      href={advertisementDetail.advertisement?.url ?? ''}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class={style.imgClass}
        src={advertisementDetail.advertisement?.imgUrl}
      />
    </a>
  ) : (
    <></>
  );
};

export default Advertisement;
