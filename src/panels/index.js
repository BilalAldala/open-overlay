import ScriptEditorPanel from "./ScriptEditorPanel.jsx";

export default {
    "script": {
        key: (params) => params.scriptKey,
        icon: (params) => {
            switch (params.scriptKey) {
                case "main.js":
                    return "document-share";
                case "settings.json":
                    return "cog";
                default:
                    return "document";
            }
        },
        title: (params) => params.scriptKey,
        component: ScriptEditorPanel
    }
}