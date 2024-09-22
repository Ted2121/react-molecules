import ElevatedAppbarStylesheet from '../../navigation-bars/appbar/types/elevated-appbar.stylesheet';

export function getElevatedAppBarStyles(): ElevatedAppbarStylesheet {
    return {
        backgroundColor: '#ae93b8',
        height: 80,
        padding: '30px 20px',
        className: 'appbar-bg-color',
        hasSpacingBelow: true,
        // gap: 20
    }
}