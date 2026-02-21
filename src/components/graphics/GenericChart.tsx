"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  LabelList,
  Cell,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export type GraphicType = "bar" | "line" | "area" | "pie";

interface GenericChartProps {
  /** The type of graphic to display. Defaults to "bar". */
  type?: GraphicType;
  /** The data to be displayed in the chart. */
  data: any[];
  /** The configuration for the chart colors and labels. */
  config: ChartConfig;
  /** The key from the data to be used for the X-axis labels. */
  xDataKey: string;
  /** The keys from the data to be plotted as series (bars, lines, or areas). */
  categories: string[];
  /** Optional title for the chart card. */
  title?: string;
  /** Optional description for the chart card. */
  description?: string;
  /** Optional children to render in the header (e.g., custom select for filtering). */
  children?: React.ReactNode;
  /** Optional class name for the card. */
  className?: string;
  /** Optional height for the chart container. Defaults to "350px". */
  height?: string | number;
}

export default function GenericChart({
  type = "bar",
  data,
  config,
  xDataKey,
  categories,
  title,
  description,
  children,
  className,
  height = "350px",
}: GenericChartProps) {
  // Determine which chart component to use based on the type prop
  const renderChart = () => {
    const commonMargin = { left: 12, right: 12 };

    switch (type) {
      case "pie":
        return (
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey={xDataKey} hideLabel />}
            />
            <Pie data={data} dataKey={categories[0]} nameKey={xDataKey}>
              <LabelList
                dataKey={xDataKey}
                className="fill-background"
                stroke="none"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        );
      case "area":
        return (
          <AreaChart accessibilityLayer data={data} margin={commonMargin}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xDataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-xl font-arabic"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
              hide
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {categories.map((key) => (
              <Area
                key={key}
                dataKey={key}
                type="monotone"
                fill={`var(--color-${key})`}
                fillOpacity={0.4}
                stroke={`var(--color-${key})`}
              />
            ))}
          </AreaChart>
        );
      case "bar":
      default:
        return (
          <BarChart accessibilityLayer data={data} margin={commonMargin}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xDataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-xl font-arabic"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
              hide
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            {categories.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                radius={[4, 4, 0, 0]}
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.fill || `var(--color-${key})`}
                  />
                ))}
              </Bar>
            ))}
          </BarChart>
        );
    }
  };

  return (
    <Card className={className}>
      {(title || description || children) && (
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {children}
        </CardHeader>
      )}
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={config}
          className={`aspect-auto w-full`}
          style={{ height }}
        >
          {renderChart()}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
