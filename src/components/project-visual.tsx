import type { JSX } from "react";
import type { Project } from "@/content/site";

const backgrounds: Record<Project["visual"], string> = {
  dashboard:
    "bg-gradient-to-br from-[#27303b] via-[#171b21] to-[#0d1116]",
  mobile: "bg-gradient-to-br from-[#3a2a1f] via-[#201913] to-[#100d0b]",
  editor: "bg-gradient-to-br from-[#1e302a] via-[#141e1a] to-[#0b110f]",
};

const bars = [38, 56, 44, 70, 52, 82, 64, 94, 72, 88];

function WindowDots() {
  return (
    <>
      <span className="size-2 rounded-full bg-[#ff5f57]/70" />
      <span className="size-2 rounded-full bg-[#febc2e]/70" />
      <span className="size-2 rounded-full bg-[#28c840]/70" />
    </>
  );
}

function DashboardMock() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-5 sm:p-8">
      <div className="w-full max-w-[26rem] overflow-hidden rounded-xl border border-white/10 bg-[#0f1318]/95 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <WindowDots />
          <span className="ml-2 rounded bg-white/5 px-2 py-0.5 text-[9px] text-white/40">
            northstar.app
          </span>
        </div>

        <div className="p-3.5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[9px] tracking-[0.16em] text-white/35 uppercase">
                Overview
              </p>
              <p className="mt-1 text-[13px] font-medium text-white/85">
                Weekly active users
              </p>
            </div>
            <span className="rounded-full bg-[#7dd3a7]/10 px-2 py-0.5 text-[9px] text-[#7dd3a7]">
              +18.2%
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Visitors", "24.8k"],
              ["Signups", "1,204"],
              ["Churn", "2.1%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1.5"
              >
                <p className="text-[8px] tracking-wide text-white/35 uppercase">
                  {label}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-white/80">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex h-24 items-end gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-2.5">
            {bars.map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-sm ${
                  index === bars.length - 2
                    ? "bg-[#f0976b]"
                    : "bg-white/12"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden p-5 sm:gap-5 sm:p-8">
      <div className="w-[7.5rem] shrink-0 -rotate-6 rounded-[1.5rem] border border-white/10 bg-[#0c0a09]/90 p-1.5 shadow-2xl sm:w-[8.5rem]">
        <div className="rounded-[1.15rem] bg-gradient-to-b from-[#2c2119] to-[#141110] px-3 pt-4 pb-3">
          <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/15" />
          <p className="text-[8px] tracking-[0.16em] text-white/35 uppercase">
            Today
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-white/85">
            7 day streak
          </p>

          <div className="mt-3 flex items-center gap-2.5">
            <div className="relative size-12 shrink-0">
              <svg viewBox="0 0 48 48" className="size-12 -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  fill="none"
                  stroke="#f0976b"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="119.4"
                  strokeDashoffset="33"
                />
              </svg>
              <span className="absolute inset-0 grid place-items-center text-[9px] font-medium text-white/80">
                72%
              </span>
            </div>
            <div className="space-y-1.5">
              {["Read", "Walk", "Write"].map((item, index) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span
                    className={`size-1.5 rounded-full ${
                      index === 0 ? "bg-[#f0976b]" : "bg-white/20"
                    }`}
                  />
                  <span className="text-[8px] text-white/45">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[8rem] shrink-0 translate-y-4 rotate-[5deg] rounded-[1.5rem] border border-white/10 bg-[#0c0a09]/90 p-1.5 shadow-2xl sm:w-[9rem]">
        <div className="rounded-[1.15rem] bg-gradient-to-b from-[#241b15] to-[#100d0b] px-3 pt-4 pb-4">
          <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/15" />
          <p className="text-[8px] tracking-[0.16em] text-white/35 uppercase">
            This week
          </p>
          <div className="mt-2 flex items-end gap-1">
            {[45, 70, 55, 85, 62, 90, 74].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height * 0.42}px` }}
                className={`flex-1 rounded-sm ${
                  index === 5 ? "bg-[#7dd3a7]" : "bg-white/15"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 space-y-1">
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/[0.07]" />
          </div>
          <div className="mt-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1.5">
            <p className="text-[8px] text-white/40">Keep it gentle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorMock() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-5 sm:p-8">
      <div className="w-full max-w-[26rem] overflow-hidden rounded-xl border border-white/10 bg-[#0b1210]/95 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <WindowDots />
          <span className="ml-2 font-mono text-[9px] text-white/40">
            draft.md
          </span>
          <div className="ml-auto flex -space-x-1">
            <span className="size-4 rounded-full border border-[#0b1210] bg-[#f0976b]/80" />
            <span className="size-4 rounded-full border border-[#0b1210] bg-[#7dd3a7]/80" />
            <span className="size-4 rounded-full border border-[#0b1210] bg-[#93b8f5]/80" />
          </div>
        </div>

        <div className="flex">
          <div className="hidden w-24 shrink-0 space-y-2 border-r border-white/[0.07] p-2.5 sm:block">
            {["draft.md", "notes.md", "ideas.md"].map((file, index) => (
              <div
                key={file}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${
                  index === 0 ? "bg-white/[0.06]" : ""
                }`}
              >
                <span
                  className={`size-1 rounded-full ${
                    index === 0 ? "bg-[#f0976b]" : "bg-white/20"
                  }`}
                />
                <span
                  className={`font-mono text-[8px] ${
                    index === 0 ? "text-white/60" : "text-white/30"
                  }`}
                >
                  {file}
                </span>
              </div>
            ))}
          </div>

          <div className="min-w-0 flex-1 p-3.5">
            <div className="h-2 w-3/5 rounded-full bg-white/25" />
            <div className="mt-2.5 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-11/12 rounded-full bg-white/10" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
            <div className="mt-3 rounded-r border-l-2 border-[#f0976b] bg-white/[0.03] py-1.5 pl-2">
              <div className="h-1.5 w-5/6 rounded-full bg-white/12" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/[0.08]" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-[#7dd3a7]/10 px-2 py-0.5 text-[8px] text-[#7dd3a7]">
                #writing
              </span>
              <span className="rounded-full bg-[#93b8f5]/10 px-2 py-0.5 text-[8px] text-[#93b8f5]">
                @maya
              </span>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[8px] text-white/40">
                saved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mocks: Record<Project["visual"], () => JSX.Element> = {
  dashboard: DashboardMock,
  mobile: MobileMock,
  editor: EditorMock,
};

export function ProjectVisual({
  variant,
  className = "",
}: {
  variant: Project["visual"];
  className?: string;
}) {
  const Mock = mocks[variant];

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${backgrounds[variant]} ${className}`}
    >
      <div className="absolute inset-0 opacity-60 grid-lines" />
      <div className="absolute -top-16 -right-10 size-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative h-full">
        <Mock />
      </div>
    </div>
  );
}
