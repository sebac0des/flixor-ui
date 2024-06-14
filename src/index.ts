#!/usr/bin/env node

import {Command} from 'commander'

// Commands
import {component,init,page} from '@/src/commands/index'


async function main(){
    const program = new Command()
    .name("flixor ui")
    .description("Elevate content creation with my CLI's specialized web templates.")
    .version(
      "1.0.0",
      "-v, --version",
      "display the version number"
    )

    program.addCommand(init).addCommand(page).addCommand(component)

    program.parse()

    return null
}

main()