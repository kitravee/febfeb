import { useCallback, useState } from 'react';

export const useAnchorElement = (initial = null) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(
    initial,
  );

  const open = useCallback(
    (event: React.MouseEvent<HTMLElement>) =>
      setAnchorElement(event.currentTarget),
    [],
  );
  const close = useCallback(() => setAnchorElement(null), []);

  return { isOpen: anchorElement, open, close };
};
