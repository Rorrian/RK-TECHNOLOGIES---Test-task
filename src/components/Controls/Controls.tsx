import { Bar, Label, Button } from './styles'

type ControlsProps = {
  fetchCatImage: () => void
  isEnabled: boolean
  toggleIsEnabled: () => void
  isAutoRefresh: boolean
  toggleIsAutoRefresh: () => void
}

export const Controls = ({
  fetchCatImage,
  isEnabled,
  toggleIsEnabled,
  isAutoRefresh,
  toggleIsAutoRefresh,
}: ControlsProps) => {
  return (
    <Bar>
      <Label>
        <input type="checkbox" checked={isEnabled} onChange={toggleIsEnabled} />
        <span>Enabled</span>
      </Label>

      <Label>
        <input
          type="checkbox"
          checked={isAutoRefresh}
          onChange={toggleIsAutoRefresh}
        />
        <span>Auto-refresh every 5 seconds</span>
      </Label>

      <Button onClick={fetchCatImage}>Get a cat</Button>
    </Bar>
  )
}
