import Image from "next/image";
import { content, type Locale } from "@/lib/content";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem00({ locale = "kr" }: { locale?: Locale }) {
  const t = content[locale].slider;
  const { pc } = PREFIX[locale] || PREFIX.kr;

  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/chuncheon/${pc}_1.png`}
        alt={t.alt1}
        fill
        className="object-cover min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/chuncheon/${pc}_1.png`}
        alt={t.alt1}
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
