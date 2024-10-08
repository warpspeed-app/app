import * as React from "react";

interface RendererProps {
  nodes: React.ReactNode;
  children?: React.ReactNode;
}

type RendererType<P> = React.FC<RendererProps & P>;

type SlotProps<P> = {
  showChildren?: boolean;
  restProps?: P & { defaultChildren: React.ReactNode };
};

type NormalOrFunctionChildren<P> =
  | React.ReactNode
  | ((props: P & { defaultChildren: React.ReactNode }) => React.ReactNode);

type SlotType<P> = {
  (
    props: SlotProps<P> & { children?: NormalOrFunctionChildren<P> }
  ): React.ReactElement | null;
  Renderer: RendererType<P>;
};

export function createSlot<P extends {}>(): SlotType<P> {
  const Slot: SlotType<P> = (({ children, showChildren, restProps }) => {
    if (!showChildren) {
      return null;
    }

    if (typeof children === "function" && restProps) {
      return children(restProps);
    }

    return <>{children}</>;
  }) as SlotType<P>;

  const Renderer: RendererType<P> = ({ nodes, children, ...restProps }) => {
    const slotted = React.Children.toArray(nodes).find((child) => {
      return React.isValidElement(child) && child.type === Slot;
    });

    if (!slotted || !React.isValidElement(slotted)) {
      return <>{children}</>;
    }

    return React.cloneElement(slotted, {
      showChildren: true,
      restProps: { ...restProps, defaultChildren: children },
    } as unknown as SlotProps<P>);
  };

  Slot.Renderer = Renderer;

  return Slot;
}
