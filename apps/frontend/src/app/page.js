import { Button } from "ui";

export default function page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <Button onClick={() => alert("UI Button is working!")}>Click me</Button>
    </main>
  );
}
