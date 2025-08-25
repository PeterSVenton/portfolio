export enum Tech {
  PowerBI = "Power BI",
  DAX = "DAX",
  SQL = "SQL",
  ReportBuilder = "Report Builder",
  PowerAutomate = "Power Automate",

  Python = "Python",
  Pandas = "pandas",
  NumPy = "NumPy",
  Matplotlib = "matplotlib",
  ScikitLearn = "scikit-learn",
  Manim = "Manim",

  Azure = "Azure",
  AWS = "AWS",
}

export enum TechCategory {
  BI = "BI",
  Language = "Language",
  Library = "Library",
  Cloud = "Cloud",
  Tooling = "Tooling",
  Database = "Database",
  Platform = "Platform",
}

export const CATEGORY_STYLE: Record<TechCategory, string> = {
  [TechCategory.BI]: "bg-amber-100 text-amber-900 ring-1 ring-amber-200",
  [TechCategory.Language]:
    "bg-emerald-100 text-emerald-900 ring-1 ring-emerald-200",
  [TechCategory.Library]: "bg-sky-100 text-sky-900 ring-1 ring-sky-200",
  [TechCategory.Cloud]: "bg-purple-100 text-purple-900 ring-1 ring-purple-200",
  [TechCategory.Tooling]: "bg-slate-100 text-slate-900 ring-1 ring-slate-200",
  [TechCategory.Database]:
    "bg-indigo-100 text-indigo-900 ring-1 ring-indigo-200",
  [TechCategory.Platform]:
    "bg-fuchsia-100 text-fuchsia-900 ring-1 ring-fuchsia-200",
};

export type TechMeta = {
  label: string;
  category: TechCategory;
  url: string;
  className?: string;
};

export const TECH_META: Record<Tech, TechMeta> = {
  [Tech.PowerBI]: {
    label: "Power BI",
    url: "https://www.microsoft.com/en-us/power-platform/products/power-bi",
    category: TechCategory.BI,
  },
  [Tech.DAX]: {
    label: "DAX",
    url: "https://learn.microsoft.com/en-us/dax/",
    category: TechCategory.BI,
  },
  [Tech.SQL]: {
    label: "SQL",
    url: "https://www.microsoft.com/en-gb/sql-server/sql-server-downloads",
    category: TechCategory.Database,
  },
  [Tech.ReportBuilder]: {
    label: "Report Builder",
    url: "https://learn.microsoft.com/en-us/power-bi/paginated-reports/report-builder-power-bi",
    category: TechCategory.Tooling,
  },
  [Tech.PowerAutomate]: {
    label: "Power Automate",
    url: "https://www.microsoft.com/en-gb/power-platform/products/power-automate",
    category: TechCategory.Tooling,
  },

  [Tech.Python]: {
    label: "Python",
    url: "https://www.python.org/about/",
    category: TechCategory.Language,
  },
  [Tech.Pandas]: {
    label: "Pandas",
    url: "https://pandas.pydata.org/",
    category: TechCategory.Library,
  },
  [Tech.NumPy]: {
    label: "NumPy",
    url: "https://numpy.org/",
    category: TechCategory.Library,
  },
  [Tech.Matplotlib]: {
    label: "Matplotlib",
    url: "https://matplotlib.org/",
    category: TechCategory.Library,
  },
  [Tech.ScikitLearn]: {
    label: "Scikit-learn",
    url: "https://scikit-learn.org/stable/",
    category: TechCategory.Library,
  },

  [Tech.Manim]: {
    label: "Manim",
    url: "https://www.manim.community/",
    category: TechCategory.Tooling,
  },

  [Tech.Azure]: {
    label: "Azure",
    url: "https://azure.microsoft.com/en-gb",
    category: TechCategory.Cloud,
  },
  [Tech.AWS]: {
    label: "AWS",
    url: "https://aws.amazon.com/",
    category: TechCategory.Cloud,
  },
};
