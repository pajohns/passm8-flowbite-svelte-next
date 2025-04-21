import type { PopperProps } from "flowbite-svelte-custom/utils/Popper.svelte";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";

interface DropdownProps extends PopperProps {
  simple?: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  activeUrl?: string;
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {}

interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

interface DropdownItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
}

interface DropdownGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export { type DropdownDividerProps, type DropdownGroupProps, type DropdownHeaderProps, type DropdownItemProps, type DropdownProps };

