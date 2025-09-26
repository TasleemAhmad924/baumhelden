import { Footerdemo } from "@/components/ui/footer-section";
import { ClientOnly } from "@/components/ClientOnly";

function Footer() {
  return (
    <ClientOnly>
      <div className="block">
        <Footerdemo />
      </div>
    </ClientOnly>
  );
}

export { Footer };


