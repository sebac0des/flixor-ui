import {Command} from 'commander'
import prompts from 'prompts'
import chalk from 'chalk'

export const component = new Command('component')
  .description('add component to your project')
  .action(async () => {
    try {
      const componentName = await promptForComponent()
      console.log('this is my component',componentName)
    }catch(e){}
  })

export async function promptForComponent(){

  const highlight = (text:string)=>chalk.green(text)

 const componentPrompt = await prompts(
    {
      type: "select",
      name: "component",
      message: `Which ${highlight("component")} would you like to install?`,
      choices: [
        { title: "Button", value: "button" },
        { title: "Input", value: "input" },
      ],
    },
  )

  return componentPrompt.component
}



