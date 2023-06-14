export type StringOrNull = string | null;

export type ResourceAvailabilityType = "open" | "closed";
export type ValidationStatusType = "approve" | "reject";
export type QuestionValidationStatus = "pending" | "rejected" | "approved";

export interface IValidator {
  admin: string;
  status: ValidationStatusType;
}

export interface IQuestion {
  body: string;
  user: string;
  validators: IValidator[];
  marked: boolean;
  markedBy: StringOrNull;
  markedAt: StringOrNull;
  availability: ResourceAvailabilityType;
}

export interface IQuestionDocument extends IQuestion {
  id: string;
  validationStatus: QuestionValidationStatus;
}

export interface IAdmin {
  email: string;
  username: string;
  isSuper: boolean;
}

export interface IAdminDocument extends IAdmin {
  id: string;
}

export interface ISuperAdmin extends IAdmin {
  isSuper: true;
}

export interface ISuperAdminDocument extends ISuperAdmin {
  id: string;
}

export interface IAnswer {
  body: string;
  question: string;
  admin: string;
  isEdited: boolean;
  editedBy: string | null;
  availability: ResourceAvailabilityType;
  submittedBy: string | null;
}

export interface IAnswerDocument extends IAnswer {
  id: string;
}
