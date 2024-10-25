import { FunctionalComponent } from "preact";
import style from "./style.module.css";

interface AdvertisementProps {}

const Advertisement: FunctionalComponent<AdvertisementProps> = (
  props: AdvertisementProps,
) => {
  return (
    <a
      class={style.advertisement}
      href={"https://www.youtube.com"}
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  );
};

export default Advertisement;
