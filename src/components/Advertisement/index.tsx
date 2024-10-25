import { FunctionalComponent } from "preact";
import style from "./style.module.css";
import { ADVERTISEMENT_LINK } from "../../Config";

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
    ></a>
  );
};

export default Advertisement;
