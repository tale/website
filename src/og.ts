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
      padding: 48,
      backgroundColor: "#101010",
      color: "white",
      fontFamily: "Berkeley Mono",
      lineHeight: 1,
    },
    children: [
      container({
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          marginBottom: 16,
        },
        children: [text("tale.me"), text(date ? formatter.format(date) : "", { opacity: 0.6 })],
      }),
      container({
        style: {
          width: "100%",
          margin: "8px 0",
          border: "1px solid #303030",
        },
      }),
      text(title, { fontSize: 72, margin: "22px 0" }),
      text(description, {
        marginTop: 8,
        marginBottom: 32,
        fontSize: 32,
        opacity: 0.8,
        maxWidth: "75%",
      }),
      text(mountain, {
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: 16,
        whiteSpace: "pre",
        fontSize: 16,
        color: "#707070",
      }),
    ],
  });
}
