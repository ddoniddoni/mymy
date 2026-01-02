import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  EyeIcon,
  RocketIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8
        text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span
          className="animate-ping absolute 
            inline-flex h-full w-full rounded-full
            bg-primary opacity-75"
        ></span>
        <span
          className="relative inline-flex
        rounded-full h-2 w-2 bg-primary"
        ></span>
      </span>
      <span className="text-muted-foreground">
        수천 명의 크리에이터들과 함께 그들의 작품을 공유하세요.
      </span>
    </Badge>
  );
};

const statsData = [
  {
    icon: RocketIcon,
    value: "2.5K+",
    label: "Projects Shared",
  },
  {
    icon: UsersIcon,
    value: "10k+",
    label: "Active Creators",
    hasBorder: true,
  },
  {
    icon: EyeIcon,
    value: "50k+",
    label: "Monthly Visitors",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />
          <h1
            className="text-5xl sm:text-6xl
          lg:text-7xl font-bold tracking-tight mb-6
          max-w-5xl"
          >
            <span>여러분이 만든 것을 공유하고, </span>
            <span>새롭게 출시될 제품들을 살펴보세요.</span>
          </h1>
          <p
            className="text-lg sm:text-xl
          text-muted-foreground mb-10 max-w-2xl
          leading-relaxed"
          >
            앱, AI 도구, SaaS 제품 및 창작 프로젝트를 선보일 수 있는 크리에이터
            커뮤니티 플랫폼입니다. 진정한 출시, 실제 개발자, 진솔한 피드백을
            만나보세요.
          </p>
          <div
            className="flex flex-col sm:flex-row
          gap-4 mb-16"
          >
            <Button asChild size="lg" className="text-base px-8 shadow-lg">
              <Link href="/submit">
                <SparklesIcon className="size-5" />
                프로젝트 공유하기
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-8 shadow-lg"
              variant="secondary"
            >
              <Link href="/explore">
                프로젝트 둘러보기
                <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8
        sm:gap-12 max-w-2xl w-full"
          >
            {statsData.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
