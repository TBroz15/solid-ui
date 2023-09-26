import { As } from "@kobalte/core"

import { ComponentExample } from "~/components/component-example"
import { Button } from "~/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/registry/ui/tooltip"

export function TooltipDemo() {
  return (
    <ComponentExample>
      <Tooltip>
        <TooltipTrigger asChild>
          <As component={Button} variant="outline">
            Trigger
          </As>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </ComponentExample>
  )
}