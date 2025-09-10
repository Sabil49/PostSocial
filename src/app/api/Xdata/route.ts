export async function GET() {
  const userId = "12345"; // Placeholder for actual user ID extraction logic
  return new Response(JSON.stringify({ userId }), { status: 200 });
}