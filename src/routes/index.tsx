import { createFileRoute } from "@tanstack/react-router";
import { UpsampleBench } from "@/components/upsample-bench";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <UpsampleBench />;
}
