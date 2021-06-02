import * as core from '@actions/core'
import axios from 'axios'
import * as _ from 'lodash'
import * as semver from 'semver'

async function run(): Promise<void> {
  try {
    const imageName: string = core.getInput('image_name', {required: true})

    axios
      .get(`https://hub.docker.com/v2/repositories/${imageName}/tags/`)
      .then(response => {
        const latest = _.last(
          _.remove(
            _.sortBy(_.map(response.data.results, 'name')),
            function (e) {
              return semver.validRange(e)
            }
          )
        )
        core.setOutput('latest', latest)
        core.exportVariable('latest', latest)
      })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
