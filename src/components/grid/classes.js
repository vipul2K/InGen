
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const Classes = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 6,
    },
    paper: {
      padding: theme.spacing(90),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default Classes;
