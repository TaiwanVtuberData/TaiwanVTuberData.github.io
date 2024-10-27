import { FunctionalComponent } from "preact";
import style from "./style.module.css";
import { ADVERTISEMENT_ASSET_LINK, ADVERTISEMENT_LINK } from "../../Config";

interface AdvertisementProps {}

const Advertisement: FunctionalComponent<AdvertisementProps> = (
  props: AdvertisementProps,
) => {
  return (
    <a
      class={style.advertisement}
      href={ADVERTISEMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class={style.imgClass} src={ADVERTISEMENT_ASSET_LINK} />
    </a>
  );
};

export default Advertisement;
