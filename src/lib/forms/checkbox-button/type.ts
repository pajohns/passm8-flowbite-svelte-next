import type { ButtonProps } from "flowbite-svelte-custom/buttons";
import type { HTMLInputAttributes } from "svelte/elements";

interface CheckboxButtonProps extends Omit<HTMLInputAttributes, "size"> {
  group?: (string | number)[];
  value?: string | number;
  checked?: boolean | undefined;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
}

export { type CheckboxButtonProps };
