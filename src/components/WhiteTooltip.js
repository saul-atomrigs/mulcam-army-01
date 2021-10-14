import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import Zoom from '@mui/material/Zoom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    help: {
        "& .MuiHelp-icon": {
            fontSize: 8
        }
    }
});

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
}));


export default function WhiteTooltip(props) {
    const classes = useStyles();

    return (
        <>
            <LightTooltip title={props.title} placement={props.placement} TransitionComponent={Zoom}>
                <HelpIcon className={classes.help} />
            </LightTooltip>
        </>
    )
}