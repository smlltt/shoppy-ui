import { capitalize } from "@mui/material";

export const parseError = (message?: string | string[]) => {
  if (!message) {
    return <p />;
  }
  if (typeof message === "string") {
    return <p className="text-red-400 text-xs">{capitalize(message)}</p>;
  }
  return message.map((msg) => (
    <p className="text-red-400 text-xs" key={msg}>
      {capitalize(msg)}
    </p>
  ));
};
