import React from "react";
import { Provider } from "react-native-paper";
import App from "./loginApp/index";
import { theme } from "./loginApp/core/theme";


export default class Setting extends React.Component {
    
    render() {
        return (
            <Provider theme={theme}>
                <App />
            </Provider>
        )
    }
}
