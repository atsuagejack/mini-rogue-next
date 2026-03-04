let score = 0;

export async function GET() {
  return Response.json({ score });
}

export async function POST() {
  score += 1;
  return Response.json({ score });
}
