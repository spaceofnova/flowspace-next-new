//@ts-ignore
import { useFormStatus } from 'react-dom' 
import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
  pendingClass?: string;
  className?: string;
};

export function SubmitButton({ children, pendingText, pendingClass, className, ...props  }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending} className={isPending ? pendingClass : className } >
      {isPending ? pendingText : children}
    </button>
  );
}
