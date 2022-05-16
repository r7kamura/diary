import RSS from "rss";
import { listFullIssues, type Issue, type IssueComment } from "./issue";
import { siteBaseUrl } from "../settings";
import { formatInTimeZone } from "date-fns-tz";

export async function generateFeed(): Promise<string> {
  const rss = new RSS({
    description: "r7kamura's daily working log.",
    feed_url: `${siteBaseUrl}/feed.xml`,
    generator: "r7kamura/diary",
    site_url: `${siteBaseUrl}/`,
    title: "r7kamura/diary",
  });

  let fullIssues = await listFullIssues({ limit: 20 });
  const nowDateString = formatInTimeZone(
    new Date(),
    "Asia/Tokyo",
    "yyyy-MM-dd"
  );
  fullIssues.forEach(async (fullIssue: Issue) => {
    if (fullIssue.title >= nowDateString) {
      return;
    }

    const url = `${siteBaseUrl}/articles/${fullIssue.number}`;
    const _cdata = [fullIssue.bodyHTML]
      .concat(
        fullIssue.issueComments.map((issueComment: IssueComment) => {
          return issueComment.bodyHTML;
        })
      )
      .join("<hr>");
    rss.item({
      custom_elements: [
        {
          "content:encoded": {
            _cdata,
          },
        },
      ],
      date: new Date(fullIssue.created_at),
      description: fullIssue.description || "",
      title: fullIssue.title,
      url,
    });
  });

  return rss.xml();
}
