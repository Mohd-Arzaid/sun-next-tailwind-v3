import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

const HEADING_TWO_CLASSES =
  "text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0";

const HEADING_THREE_CLASSES =
  "mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]";

const PARAGRAPH_CLASSES =
  "mt-[16px] md:mt-[18px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose";

export const SectionHeadingTwo = ({ children, className = "" }) => (
  <h2 className={joinClasses(HEADING_TWO_CLASSES, className)}>
    {children}
  </h2>
);

// Visually identical regardless of the underlying tag;
// callers can pick the semantically correct element via `as`.
export const SectionHeadingThree = ({ as: Tag = "h2", children, className = "" }) => (
  <Tag className={joinClasses(HEADING_THREE_CLASSES, className)}>
    {children}
  </Tag>
);

export const Paragraph = ({ children, className = "" }) => (
  <p className={joinClasses(PARAGRAPH_CLASSES, className)}>
    {children}
  </p>
);

export const PointsList = ({ points }) => (
  <div className="mt-[18px] md:mt-[18px]">
    <ul className="flex flex-col gap-3 list-none">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
            <Check size={12} className="text-[#020817]" />
          </div>
          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
            {point}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export const ServiceImage = ({ src, alt, title, className = "" }) => (
  <img src={src} alt={alt} title={title ?? alt} className={className} />
);

// Data-driven table that captures the repeated service-table styling.
// `headers` is an array of header cells. `rows` is an array of row arrays.
// By default only non-last columns are emphasized (matches key/value tables);
// pass `emphasizeAllColumns` to emphasize every column (matches comparison tables).
export const ServiceTable = ({ headers, rows, emphasizeAllColumns = false }) => (
  <div className="mt-6 md:mt-8 overflow-x-auto">
    <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
      <TableHeader>
        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={joinClasses(
                "font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]",
                index < headers.length - 1 && "border-r border-gray-300"
              )}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="hover:bg-gray-50 transition-colors">
            {row.map((cell, cellIndex) => {
              const isLastColumn = cellIndex === row.length - 1;
              const isEmphasized = emphasizeAllColumns || !isLastColumn;
              return (
                <TableCell
                  key={cellIndex}
                  className={joinClasses(
                    isEmphasized && "font-medium",
                    "font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4",
                    !isLastColumn && "border-r border-gray-200",
                    "text-[#42434d]"
                  )}
                >
                  {cell}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
