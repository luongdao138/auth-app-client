import { useEffect, useRef } from 'react';

type RefType = (e: any) => void;

const useEventListener = (
  eventType: string,
  target: any = window,
  listener: (e: any) => void
): void => {
  const listenerRef = useRef<RefType>(() => {});

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;
    const eventListener = (e: any) => listenerRef.current(e);
    target.addEventListener(eventType, eventListener);

    return () => target?.removeEventListener(eventType, eventListener);
  }, [eventType, target]);
};

export default useEventListener;
