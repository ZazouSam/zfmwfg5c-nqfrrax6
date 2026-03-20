import { memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChartErrorBoundary } from "@/components/layout/error/chart-error-boundary";
import { BaseChartCardProps } from "@/features/charts/types";
import { COMPONENTSTATUS } from "@/types/index";
import { cn } from "@/lib/utils";

interface ChartCardProps extends BaseChartCardProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  titleButton?: React.ReactNode;
  loading?: boolean;
}

export const ChartCard = memo(function ChartCard({
  status,
  title,
  children,
  onClick,
  className,
  titleButton,
  loading = false,
}: ChartCardProps) {
  return (
    <div
      className={cn("flex flex-col w-full h-full", className)}
      onClick={onClick}
    >
      <div className="flex mx-auto items-center gap-1.5">
        <span
          className={cn(
            "text-xl text-center font-semibold",
            "animate-fade animate-once",
            loading && "text-muted-foreground"
          )}
        >
          {title}
        </span>
        {titleButton}
      </div>
      <div className="flex flex-1 items-center justify-center px-2 py-2">
        {" "}
        {status === COMPONENTSTATUS.IS_LOADING ? (
          <Skeleton className="m-[20px] w-[160px] h-[160px] rounded-full" />
        ) : (
          <div className="animate-fade animate-once ease-in-out">
            <ChartErrorBoundary>{children}</ChartErrorBoundary>
          </div>
        )}
      </div>
    </div>
  );
});
