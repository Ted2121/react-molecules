import ElevatedAppbarStylesheet from "../../navigation-bars/appbar/elevated-appbar/ts/types/elevated-appbar-stylesheet.model";

export function elevatedAppBarStyles(): ElevatedAppbarStylesheet {
    return {
        appbar: {
            backgroundColor: '#ae93b8',
            height: 80,
            padding: '30px 20px',
            class: 'appbar-bg-color'
        }
    }
}