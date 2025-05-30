import { Button } from 'antd';

export default function SecondaryButton({
  className = '',
  disabled,
  children,
  ...props
}) {
  return (
    <Button
      {...props}
      type="default"
      color="primary"
      variant="outlined"
      className={`py-5 ${className}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
