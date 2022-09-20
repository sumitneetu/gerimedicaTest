export interface GerimedicaFormFieldModel {
  label: string;
  field: string;
  type: string | "text" | "checkbox" | "hidden" | "email";
  hidden: string;
  mandatory?: boolean;
}
