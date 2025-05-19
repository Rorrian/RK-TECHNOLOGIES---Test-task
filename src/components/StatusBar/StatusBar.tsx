import { Bar } from './styles'

type StatusBarProps = {
  isLoading: boolean
  isEnabled: boolean
  isAutoRefresh: boolean
}

export const StatusBar = ({
  isLoading,
  isAutoRefresh,
  isEnabled,
}: StatusBarProps) => {
  return (
    <Bar>
      Status: {isLoading ? 'Loading' : 'Ready'} |{' '}
      {isEnabled ? 'Enabled' : 'Disabled'} |{' '}
      {isAutoRefresh && isEnabled ? 'Auto-refresh 5s' : 'Manual'}
    </Bar>
  )
}
