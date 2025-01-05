import { INodeParams, INodeCredential } from '../src/Interface'

class TogetherAIApi implements INodeCredential {
    label: string
    name: string
    version: number
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'TogetherAI API'
        this.name = 'togetherAIApi'
        this.version = 1.0
       this.description =
            'Refer to <a target="_blank" href="https://docs.together.ai/reference/authentication-1">official guide</a> on how to create an API key for Together AI'
        this.inputs = [
            {
                label: 'TogetherAI Api Key',
                name: 'togetherAIApiKey',
                type: 'password'
            }
        ]
    }
}

module.exports = { credClass: TogetherAIApi }
