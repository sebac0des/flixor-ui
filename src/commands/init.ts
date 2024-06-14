import {Command} from 'commander'

export const init = new Command('init')
  .description('A fake command for testing purposes')
  .action(() => {
    console.log('This is a fake command.')
  })
