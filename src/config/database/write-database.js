// faz a comunicação com o banco de escrita
const data = [];

export default class WriteData {

  static insert(item) {
    data.push(item);
    return item;
  }

  static read(index) {

  }

}
