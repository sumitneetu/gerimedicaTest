export interface GerimedicaFormFieldModel {
  id: string;
  label: string;
  field: string;
  type: string | "text" | "checkbox" | "hidden" | "email";
  hidden: boolean;
  mandatory?: boolean;
}
