import Left_nav from "@/components/left-nav";
import Signature from "@/components/signature";

export default function curricular() {
  return (
    <div className="w-full h-auto absolute">
      <Signature title="교과/비교과" />
      <div className="w-full h-screen">
        <div>
          <Left_nav className="relative left-0" />
        </div>
      </div>
    </div>
  );
}
