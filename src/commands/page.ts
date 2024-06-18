import {Command} from 'commander'

export const page = new Command('page')
  .description('Add entire page to your project')
  .action(() => {
    console.log('This is a fake command.')
  })
