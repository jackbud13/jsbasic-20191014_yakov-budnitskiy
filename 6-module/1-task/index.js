// Add your code here

// 'use strict';


class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    let tableContent = '<thead><tr class="result__tr result__tr--head">';
    tableContent += '<td class="result__td result__td--head">Name</td>';
    tableContent += '<td class="result__td result__td--head">Age</td>';
    tableContent += '<td class="result__td result__td--head">Salary</td>';
    tableContent += '<td class="result__td result__td--head">City</td>';
    tableContent += '<td class="result__td result__td--head"> </td></tr></thead><tbody>';

    this.data.forEach((key) => {
      tableContent += `<tr id=${key.id} class="result__tr"><td class="result__td">${key.name}</td>`;
      tableContent += `<td class="result__td result__td--num">${key.age}</td>`;
      tableContent += `<td class="result__td result__td--num">${key.salary}</td>`;
      tableContent += `<td class="result__td">${key.city}</td>`;
      tableContent += '<td class="result__td result__td--del"><a href="#delete" class="result__a">X</a></td></tr>';
    });
    tableContent += '</tbody>';
    this.el.insertAdjacentHTML('beforeend', tableContent);
    // console.log(tableContent);
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    const tr = document.getElementById(id);
    tr.remove();
    console.log(`Из таблицы удален пользователь ${id}`);
  }
  // if (!td) {}
}
