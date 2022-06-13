import { Typography } from "@mui/material";
import theme from "../../../theme";
import "./styles.scss";

const ChartFooter = ({ emi, principal, interestPayable }) => {
  return (
    <div className="chartfooter-wrapper">
      <div>
        <Typography
          color={theme.palette.text.secondary}
          component="p"
          variant="caption"
        >
          Monthly Emi
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          component="p"
          variant="body1"
        >
          &#8377;{emi}
        </Typography>
      </div>
      <div>
        <Typography
          color={theme.palette.text.secondary}
          component="p"
          variant="caption"
        >
          Principal
        </Typography>
        <Typography color={theme.palette.text.primary} variant="body1">
          &#8377;{principal}
        </Typography>
      </div>
      <div>
        <Typography
          color={theme.palette.text.secondary}
          component="p"
          variant="caption"
        >
          Interest paid
        </Typography>
        <Typography color={theme.palette.text.primary} variant="body1">
          &#8377;{interestPayable}
        </Typography>
      </div>
    </div>
  );
};

export default ChartFooter;
