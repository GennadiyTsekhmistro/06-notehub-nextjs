interface NoteDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Note details</h1>
      <p>Note id: {id}</p>
    </main>
  );
}