import { Command } from 'commander'
import prompts from 'prompts'
import chalk from 'chalk'
import ora from 'ora'


// Utils
import { copyComponent } from '@/src/utils/create-component'


export const component = new Command('component')
  .description('add component to your project')
  .action(async () => {
    try {
      const config = await promptForComponent()
      copyComponent(config.directory, config.name)
    } catch (e) { }
  })

export async function promptForComponent() {

  const highlight = (text: string) => chalk.green(text)

  const options = await prompts(
    [
      {
        type: "select",
        name: "component",
        message: `Which ${highlight("component")} would you like to install?`,
        choices: [
          { title: "Button", value: "button" },
          { title: "Input", value: "input" },
        ],
      },
      {
        type: "text",
        name: "directory",
        message: `Which ${highlight("directory")} would you like to install your component?`,
        initial:'components/ui'
      },
    ]
  )

  const config = {
    name: options.component,
    directory: options.directory,
  }

  return config
}



