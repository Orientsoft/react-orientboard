import {expect} from 'chai'
import _ from 'lodash'
import restActions from '../app/actions/rest'
import restStore from '../app/stores/rest'

var bm
  , board = {
      name: 'test' + Date.now()
    , owner: 'test'
    }

describe('BoardManager REST api Client', () => {
  it('should list boards', async () => {
    await restActions.listBoards()
    console.log(restStore.getState())
  })

  it('should create a new board', async () => {

  })

  it('should get an error if board with the same name exists', async () => {

  })

  it('should find the board', async () => {

  })

  it('should update the board', async () => {

  })

  it('should remove the board', async () => {

  })

})
