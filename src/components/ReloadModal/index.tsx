import { JSX } from "preact";
import { Text } from "preact-i18n";
import style from "./style.module.css";

interface ReloadPageModalProps {
  isVisible: boolean;
  oldVersion: string;
  newVersion: string;
}

export default function ReloadPageModal(
  props: ReloadPageModalProps,
): JSX.Element {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div
      onClick={reloadPage}
      class={style.modal}
      style={{ display: props.isVisible ? "block" : "none" }}
    >
      <div>
        <span>
          <Text id="reloadPageButtonText.newerVersionAvailable">
            Newer version available
          </Text>
        </span>
      </div>
      <div>
        <span>
          <Text id="reloadPageButtonText.clickHere">Click here to update</Text>
        </span>
      </div>
      <div>
        <span>
          <Text id="reloadPageButtonText.oldVersion">Old version:</Text>
          {props.oldVersion}
        </span>
      </div>
      <div>
        <span>
          <Text id="reloadPageButtonText.newVersion">New version:</Text>
          {props.newVersion}
        </span>
      </div>
    </div>
  );
}
