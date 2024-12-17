import { ColorSwatch, makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "360px",
  },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  text: {
    color: "black",
    textDecoration: "none",
    margin: "none",
  },

  flex: {
    gap: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    maxWidth: "90%",
    margin: "auto",
    justifyContent: "left",
  },

  footer: {
    position: "absolute",
    bottom: "4px",
    left: "5px",
  },
});
