
export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  focus: string[];
  image?: string;
  visual:
    | "rebox"
    | "glorivest"
    | "dngt"
    | "earnrave"
    | "metacap"
    | "acer"
    | "zamar"
    | "store"
    | "property"
    | "alist";
  links: {
    live?: string;
    source?: string;
  };
  status: string;
  challenge: string;
  approach: string[];
  learnings: string[];
};
