import React, { useState, useRef } from 'react';

interface Persons {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Persons;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<{ text: string }>({ text: 'hey' });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
