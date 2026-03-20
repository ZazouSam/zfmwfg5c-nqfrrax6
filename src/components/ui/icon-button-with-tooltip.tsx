import React from "react";
import { Tooltip, TooltipProps } from "@mui/material";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

// Centralized tooltip configuration - change these to apply to ALL icon buttons
const DEFAULT_TOOLTIP_CONFIG = {
  placement: "top" as TooltipProps["placement"],
  arrow: true,
  enterDelay: 100,
  leaveDelay: 50,
  disableInteractive: true,
};

interface IconButtonWithTooltipProps {
  /** The tooltip text to display on hover */
  tooltip: string;
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Click handler for the button */
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional CSS classes for the button */
  className?: string;
  /** Button variant (default: "outline") */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Button size (default: "icon_sm") */
  size?: "default" | "sm" | "lg" | "icon" | "icon_sm";
  /** Override tooltip placement for this specific button (optional) */
  tooltipPlacement?: TooltipProps["placement"];
  /** Override tooltip arrow setting (optional) */
  tooltipArrow?: boolean;
  /** Override tooltip enter delay (optional) */
  tooltipEnterDelay?: number;
  /** Override tooltip leave delay (optional) */
  tooltipLeaveDelay?: number;
  /** Override tooltip disableInteractive setting (optional) */
  tooltipDisableInteractive?: boolean;
}

/**
 * A reusable icon button component with MUI Tooltip integration.
 * 
 * Features:
 * - Centralized tooltip configuration (placement, delays, arrow)
 * - Consistent styling across all action buttons
 * - Proper disabled state support
 * - Optional per-button tooltip overrides
 * 
 * @example
 * ```tsx
 * <IconButtonWithTooltip
 *   tooltip="Open BOM"
 *   icon={Package}
 *   onClick={handleOpen}
 *   disabled={!contract}
 * />
 * ```
 */
export function IconButtonWithTooltip({
  tooltip,
  icon: Icon,
  onClick,
  disabled = false,
  className = "cursor-pointer",
  variant = "outline",
  size = "icon_sm",
  tooltipPlacement = DEFAULT_TOOLTIP_CONFIG.placement,
  tooltipArrow = DEFAULT_TOOLTIP_CONFIG.arrow,
  tooltipEnterDelay = DEFAULT_TOOLTIP_CONFIG.enterDelay,
  tooltipLeaveDelay = DEFAULT_TOOLTIP_CONFIG.leaveDelay,
  tooltipDisableInteractive = DEFAULT_TOOLTIP_CONFIG.disableInteractive,
}: IconButtonWithTooltipProps) {
  return (
    <Tooltip
      title={tooltip}
      placement={tooltipPlacement}
      arrow={tooltipArrow}
      enterDelay={tooltipEnterDelay}
      leaveDelay={tooltipLeaveDelay}
      disableInteractive={tooltipDisableInteractive}
    >
      {/* Span wrapper is required for tooltips on disabled buttons */}
      <span>
        <Button
          variant={variant}
          size={size}
          onClick={onClick}
          disabled={disabled}
          className={className}
        >
          <Icon />
        </Button>
      </span>
    </Tooltip>
  );
}
