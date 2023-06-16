import React from "react";

import { ValidationStatusType } from "../../../../core";
import {
  ApprovedChip,
  BaseValidationChip,
  RejectedChip,
} from "./ValidationChiptsStyles";
import { Icon } from "@iconify/react";

interface IValidationChipProps {
  validation: ValidationStatusType;
}
const ValidationChips: React.FC<IValidationChipProps> = ({ validation }) => {
  let ValidationVariant = BaseValidationChip;
  if (validation === "approve") {
    ValidationVariant = ApprovedChip;
  } else if (validation === "reject") {
    ValidationVariant = RejectedChip;
  }
  return (
    <ValidationVariant>
      {validation === "approve" ? (
        <Icon icon="fluent-mdl2:check-mark" />
      ) : (
        validation === "reject" && <Icon icon="heroicons:x-mark-20-solid" />
      )}
    </ValidationVariant>
  );
};

export default ValidationChips;
