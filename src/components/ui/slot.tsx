import * as React from "react";

type SlotProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

// Helper function to merge refs
function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, forwardedRef) => {
    if (!children) {
      return null;
    }

    // Cast to ReactElement with a possible `ref`
    const child = React.Children.only(children) as React.ReactElement & { ref?: React.Ref<HTMLElement> };

    return React.cloneElement(child, {
      ...props,
      ...child.props,
      ref: mergeRefs(child.ref, forwardedRef),
    });
  }
);

Slot.displayName = "Slot";
