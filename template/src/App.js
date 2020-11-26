import { useState } from "react";
import { Box, Button, Heading, Grommet, ResponsiveContext } from "grommet";
import { Notification } from "grommet-icons";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import theme from "./theme";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} themeMode="light" full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppHeader>
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppHeader>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
              <AppSidebar
                size={size}
                showSidebar={showSidebar}
                onClose={() => setShowSidebar(false)}
              >
                sidebar
              </AppSidebar>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
