import { SheetsRegistry } from "jss";
import { createMuiTheme, createGenerateClassName } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    palette: {
        primary: { main: blue[700] },
        secondary: { main: grey[700] }
    },
    typography: {
        useNextVariants: true
    }
});

function createPagecontext() {
    return {
        theme,
        sheetsManager: new Map(),
        sheetsRegistry: new SheetsRegistry(),
        generateClassName: createGenerateClassName()
    };
}

export default function getContext() {
    if (!process.browser) {
        return createPagecontext();
    }

    if (!global.INIT_MATERIAL_UI) {
        global.INIT_MATERIAL_UI = createPagecontext();
    }

    return global.INIT_MATERIAL_UI;
}