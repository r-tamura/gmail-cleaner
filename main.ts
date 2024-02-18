import * as cleaner from "./gmail-cleaner.ts";

declare let global: {
  doGet: (e?: GoogleAppsScript.Events.DoGet) =>
    | GoogleAppsScript.HTML.HtmlOutput
    | GoogleAppsScript.Content.TextOutput;
  doPost: (e?: GoogleAppsScript.Events.DoPost) =>
    | GoogleAppsScript.HTML.HtmlOutput
    | GoogleAppsScript.Content.TextOutput;
  [key: string]: () => void;
};

global.cleanGmail = () => {
  // delete all emails received before half a year ago
  const now = new Date();
  const halfYearAgo = new Date(
    now.getFullYear(),
    now.getMonth() - 6,
    now.getDate(),
  );
  cleaner.cleanGmail({ before: halfYearAgo });
};
