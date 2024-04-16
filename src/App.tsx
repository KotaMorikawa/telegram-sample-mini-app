import "@xelene/tgui/dist/styles.css";

import { AppRoot, Placeholder } from "@xelene/tgui";

const App = () => (
  <AppRoot>
    <Placeholder header="Title" description="Description">
      <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        style={{ display: "block", width: "144px", height: "144px" }}
      />
    </Placeholder>
  </AppRoot>
);

export default App;
