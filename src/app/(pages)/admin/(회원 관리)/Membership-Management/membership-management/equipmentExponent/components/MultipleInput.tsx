import TextInput from "@/src/components/blocks/inputs/Input";

export const MultipleInputs = ({
  displayType = "input",
  type,
  firstLabel,
  secondLabel,
  secondPlaceholder,
  firstPlaceholder,
  labelColor,
}: {
  type: string;
  firstLabel: string;
  secondLabel: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  labelColor?: string;
  displayType?: "input" | "text";
}) => {
  return (
    <div className="flex w-full gap-5">
      {displayType === "input" ? (
        <>
          <div className="flex-1">
            <TextInput
              type={type}
              label={firstLabel}
              placeholder={firstPlaceholder}
              labelColor={labelColor}
            />
          </div>
          <div className="flex-1">
            <TextInput
              type={type}
              label={secondLabel}
              placeholder={secondPlaceholder}
              labelColor={labelColor}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex gap-2">
            <span
              className={`w-[90px] font-[400] text-[14px] ${
                labelColor ? labelColor : "text-[#A3A6AB]"
              } `}
            >
              {firstLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {firstPlaceholder}
            </span>
          </div>
          <div className="flex-1 flex gap-2">
            <span
              className={`w-[90px] font-[400] text-[14px] ${
                labelColor ? labelColor : "text-[#A3A6AB]"
              }`}
            >
              {secondLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {secondPlaceholder}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
