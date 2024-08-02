module.exports = function reverse (n) {
    let newArr = String(n).split(""); // преобразуем номер в строку и разбиваем ее на массив
    let newString = newArr.reverse().join(""); // массив в обратном порядке соединяем, по умолч. join имеет раздлитель запятую, меняю на пуст. строку.
    return parseInt(newString);
}
