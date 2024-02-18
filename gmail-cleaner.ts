type CleanGmailOptions = {
  before: Date;
};

export function cleanGmail({ before }: CleanGmailOptions) {
  // delete all emails received before a certain date
  const searchConditionDate = Utilities.formatDate(
    before,
    Session.getScriptTimeZone(),
    "yyyy/MM/dd",
  );
  const threads = GmailApp.search(`before:${searchConditionDate}`);
  Logger.log(
    `Deleting before ${searchConditionDate} (${threads.length} threads)`,
  );
  GmailApp.moveThreadsToTrash(threads);
  Logger.log("Done");
}
