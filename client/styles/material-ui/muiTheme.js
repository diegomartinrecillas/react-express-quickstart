import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {primary, accent} from './muiColors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: primary,
        accent1Color: accent
    }
});

export default muiTheme;
