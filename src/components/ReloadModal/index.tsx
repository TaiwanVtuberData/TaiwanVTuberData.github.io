import { JSX } from "preact";
import { Text } from "preact-i18n";
import "./style.css";

import { useRegisterSW } from "virtual:pwa-register/preact";

// https://vite-pwa-org.netlify.app/frameworks/preact
export default function ReloadPrompt(): JSX.Element {
  const {
    offlineReady: [],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  return (
    <div class="reloadPromptContainer">
      <div
        class="reloadPromptToast"
        style={{ display: needRefresh ? "block" : "none" }}
      >
        <div
          onClick={() => updateServiceWorker(true)}
          class="reloadPromptToastButton"
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
              <Text id="reloadPageButtonText.clickHere">
                Click here to update
              </Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
