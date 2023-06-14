import { ReactMarkdownProps } from 'react-markdown/lib/complex-types'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { cn } from 'ui/src/utils/cn'

interface Props extends Omit<ReactMarkdownProps, 'children' | 'node'> {
  className?: string
  content: string
}

const Markdown = ({ className, content, ...props }: Props) => {
  return (
    <ReactMarkdown {...props} className={cn('prose text-sm', className)}>
      {content}
    </ReactMarkdown>
  )
}

export { Markdown }
