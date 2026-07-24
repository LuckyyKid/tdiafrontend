
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCounter } from '../hooks/useCounter';

interface CounterValueProps {
  end?: number;
  value?: number; // Adding this as an alternative prop
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const CounterValue: React.FC<CounterValueProps> = ({
  end,
  value, // Accept the value prop
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: false
  });

  // Use either end or value, with value taking precedence if both are provided
  const targetValue = value !== undefined ? value : end;

  const formattedCount = useCounter({
    end: targetValue || 0, // Use the determined value, defaulting to 0 if both are undefined
    start: 0,
    duration: 2500,
    decimals,
    prefix,
    suffix,
    shouldStart: inView
  });

  return (
    <span ref={ref} className={className}>
      {formattedCount}
    </span>
  );
};

export default CounterValue;
