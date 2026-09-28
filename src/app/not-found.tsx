import Link from "next/link";
import Guide from "@/components/Guide";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 pt-6">
      <Guide text="Oops, this path leads into the deep woods! Let's head back to Town Square." />
      <Link href="/" className="btn-glossy">
        Back to Town Square
      </Link>
    </div>
  );
}
