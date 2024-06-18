import {Command} from 'commander'

export const init = new Command('init')
  .description('Initialize the modules configuration')
  .action(() => {
    console.log('This is a fake command.')
  })
