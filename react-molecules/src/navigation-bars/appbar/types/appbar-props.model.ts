import ElevatedAppbarStylesheet from './elevated-appbar.stylesheet';

export default interface AppBarProps {
    children?: React.ReactElement<any>;
    pinned?: React.ReactElement<any>;
    styles?: ElevatedAppbarStylesheet;
    buttons?: Array<React.ReactElement>
}