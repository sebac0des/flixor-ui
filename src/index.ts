#!/usr/bin/env node
import {init} from '@/src/commands/init'
import {Command} from 'commander'

async function main(){
    const program = new Command()
    .name("flixor ui")
    .description("Elevate content creation with my CLI's specialized web templates.")
    .version(
      "1.0.0",
      "-v, --version",
      "display the version number"
    )

    program.addCommand(init)

    program.parse()

    return null
}

main()