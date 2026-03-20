import { cn } from "@/lib/utils";

interface LoadingDotsProps {
  className?: string;
}

/**
 * Animated loading dots component
 * Displays "Loading" text with three animated dots
 */
export function LoadingDots({ className }: LoadingDotsProps) {
  return (
    <span className={cn("inline-flex items-center gap-0", className)}>
      <span>Loading</span>
      <span className="inline-flex">
        <span className="animate-pulse [animation-delay:0ms] [animation-duration:1.4s]">.</span>
        <span className="animate-pulse [animation-delay:200ms] [animation-duration:1.4s]">.</span>
        <span className="animate-pulse [animation-delay:400ms] [animation-duration:1.4s]">.</span>
      </span>
    </span>
  );
}
