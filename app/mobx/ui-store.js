import { observable } from 'mobx'


class UIStore {
  @observable showBoardConfig = false
  @observable showBlockConfig = false
  @observable boardAction = 'create'
  @observable theme = 'default'
}

export default new UIStore()
