import Button from '@mui/material/Button'

interface Button {
  onClick: () => void
  innerText: string
  disabled: boolean
}

export const FormButton: React.FC<Button> = ({
  onClick,
  innerText,
  disabled,
}) => {
  return (
    <>
      <Button disabled={disabled} size="medium" onClick={onClick}>
        {innerText}
      </Button>
    </>
  )
}
