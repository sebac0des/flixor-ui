import {Command} from 'commander'


export const component = new Command('component')
  .description('add component to your project')
  .action(() => {
    console.log('This is a fake command.')
  })





