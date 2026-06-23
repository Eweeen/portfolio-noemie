import { projects } from "@/data/projects";

export async function GET(Request: Request) {
  const { searchParams } = new URL(Request.url);
  const limit = searchParams.get("limit");

  if (limit) {
    const limitedProjects = projects.slice(0, parseInt(limit));
    return Response.json(limitedProjects);
  }

  return Response.json(projects);
}
