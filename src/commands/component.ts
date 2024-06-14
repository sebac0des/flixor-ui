import {Command} from 'commander'
import prompts from 'prompts'
import chalk from 'chalk'

export const component = new Command('component')
  .description('add component to your project')
  .action(() => {
    try {
      PromptForConfig()
    }catch(e){}
  })

export async function PromptForConfig(){

  const highlight = (text:string)=>chalk.green(text)

  const options = await prompts([
    {
      type: "select",
      name: "component",
      message: `Which ${highlight("component")} would you like to install?`,
      choices: [
        { title: "Button", value: "button" },
        { title: "Input", value: "input" },
      ],
    },
  ])

  
}



