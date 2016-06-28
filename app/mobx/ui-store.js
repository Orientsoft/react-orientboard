import { observable } from 'mobx'


class UIStore {
  @observable showBoardConfig = false
  @observable showBlockConfig = false
  @observable boardAction = 'create'
}

export default new UIStore()
