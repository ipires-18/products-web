export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: Option[] | undefined;
  placeholder?: string;
  onSelect: (value: string) => void;
}
