export {
  projectAreas,
  isProjectArea,
  type ProjectArea,
  type ProjectCasePreview,
  type CaseStudyKey,
  type ProjectCaseStudy,
} from "./types";
export { projectCategories } from "./categories";

import type { CaseStudyKey, ProjectCaseStudy } from "./types";
import { industrialiCaseStudies } from "./cases/industriali";
import { residenzialiCaseStudies } from "./cases/residenziali";
import { ricettiviCaseStudies } from "./cases/ricettivi";

export const projectCaseStudies = {
  ...residenzialiCaseStudies,
  ...industrialiCaseStudies,
  ...ricettiviCaseStudies,
} as Record<CaseStudyKey, ProjectCaseStudy>;

export function getCaseStudyKey(area: import("./types").ProjectArea, slug: string): CaseStudyKey | null {
  const k = `${area}/${slug}` as CaseStudyKey;
  return k in projectCaseStudies ? k : null;
}
