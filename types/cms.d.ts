interface CMSPage {
  title: string;
  description: string;
  body: string;
}

interface CMSService extends CMSPage {
  schema: string;
}

interface CMSBlogPost extends CMSPage {
  date: string;
  thumbnail: string;
}

interface CMSDirectory {
  title: string;
  body: string;
} 