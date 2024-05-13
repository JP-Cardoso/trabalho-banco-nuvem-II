// faz a comunicação com o banco de escrita
const data = [];

export default class WriteData {

  static insert(item) {
    data.push(item);
    return item;
  }

  static read(index) {
    if(index >= 10) {
      for (let count = 0; count <= 10; count++) {
        const element = data[index--];
        console.log("read ->", element); 
      }
    }
  }

}
