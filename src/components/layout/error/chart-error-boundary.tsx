import { Component, ErrorInfo, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
  title?: string
}

interface State {
  hasError: boolean
}

export class ChartErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Chart Error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Card className="p-1">
          <CardHeader>
            <CardTitle>{this.props.title || 'Chart Error'}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <p className="text-sm text-muted-foreground mb-4">Failed to load chart</p>
            <Button onClick={() => this.setState({ hasError: false })}>
              Retry
            </Button>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}
