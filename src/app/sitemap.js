
export default function sitemap() {
  const baseUrl =
    "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app";
  const lastModifiedDate = new Date("2025-08-27");

  return [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/About`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Business`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Company`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Careers`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
