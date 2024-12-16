import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "360px",
  },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  text: { margin: "0" },

  flex: {
    gap: "20px",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "90%",
    margin: "auto",
    justifyContent: "left",
  },

  footer: {
    position: "absolute",
    bottom: "4px",
    left: "16px",
  },
});
