import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>NoteHub</h1>
      <p>
        NoteHub is a simple and efficient application designed for managing
        personal notes.
      </p>
      <Link href="/notes">View Notes</Link>
    </main>
  );
}
