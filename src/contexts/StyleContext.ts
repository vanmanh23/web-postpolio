import { createContext } from "react";

type styleContext = {
    isDark: boolean;
    handleSwitch: (isDark: boolean) => void;
}

export const StyleContext = createContext({} as styleContext);