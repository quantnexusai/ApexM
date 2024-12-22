import { INodeParams, INodeCredential } from '../src/Interface'

class XaiApi implements INodeCredential {
    label: string
    name: string
    version: number
    description: string
    inputs: INodeParams[]

    constructor() {
        this.label = 'Xai API'
        this.name = 'xaiApi'
        this.version = 1.0
        this.description =
            'Refer to <a target="_blank" href="https://docs.voyageai.com/install/#authentication-with-api-keys">official guide</a> on how to get an API Key'
        this.inputs = [
            {
                label: 'X AI API Key',
                name: 'xaiApiKey',
                type: 'password'
            }
        ]
    }
}

module.exports = { credClass: XaiApi }
