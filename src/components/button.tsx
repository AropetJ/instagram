import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

interface ButtonProps {}

const buttonVariants = cva({

})

const Button: React.FC<ButtonProps> = ({

}) => {
  return ( 
    <button>Click me</button>
  );
}
 
export {Button, buttonVariants};