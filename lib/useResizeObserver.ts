import React from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useResizeObserver(
  ref: React.RefObject<any>,
  monitor: { height?: boolean; width?: boolean },
  defaultValues = { width: 0, height: 0 }
): { height: number; width: number } {
  const [height, setHeight] = React.useState(defaultValues.height);
  const [width, setWidth] = React.useState(defaultValues.width);

  const observer = React.useRef(
    new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect || defaultValues;
      if (monitor?.width) {
        setWidth(width);
      }
      if (monitor?.height) {
        setHeight(height);
      }
    })
  );

  React.useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observer.current.observe(currentRef);
      return () => {
        observer.current.unobserve(currentRef);
      };
    }
  }, [ref, observer]);

  return React.useMemo(
    () => ({ width: width, height: height }),
    [height, width]
  );
}
