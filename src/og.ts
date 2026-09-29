import { container, text } from "takumi-js/helpers";
import ascii from "@/assets/ascii.txt?raw";

const [mountain = ""] = ascii.split("\n\n");
const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

interface Props {
  title: string;
  description: string;
  date?: Date;
}

export default function createCard({ title, description, date }: Props) {
  return container({
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      padding: 56,
      backgroundColor: "#101010",
      color: "white",
      fontFamily: "Berkeley Mono",
      lineHeight: 1.2,
    },
    children: [
      container({
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          paddingBottom: 20,
          borderBottom: "1px solid #343434",
        },
        children: [text("tale.me"), text(date ? formatter.format(date) : "", { opacity: 0.6 })],
      }),
      text(title, {
        fontSize: 68,
        lineHeight: 1.12,
        textWrap: "balance",
        margin: "28px 0 18px",
      }),
      text(description, {
        fontSize: 30,
        lineHeight: 1.3,
        textWrap: "pretty",
        color: "#c8c8c8",
        maxWidth: "90%",
      }),
      text(mountain, {
        marginLeft: "auto",
        marginTop: "auto",
        whiteSpace: "pre",
        fontSize: 18,
        lineHeight: 1,
        color: "#8b8b8b",
      }),
    ],
  });
}
