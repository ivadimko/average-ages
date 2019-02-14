'use strict';

const people = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1925, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1816, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

/**
 * Возвращает средний возраст мужчин в массиве
 * Если передан `century` то только живших в указанном столетии
 * беря их год смерти, деля его на 100 и округляя: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const data = people.filter(person => person.sex === 'm'
    && (typeof century === 'undefined' || Math.ceil(person.died / 100) === century))
  return data.reduce((a, b) => a + b.died - b.born, 0) / data.length;
}


/**
 * Возвращает средний возраст Женщин в массиве
 * Если передан `withChildren` то только тех у которых есть дети в массиве
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const women = people.reduce((a, b) => {
    if (b.sex === 'f') {
      a[b.name] = {...b};
      a[b.name].children = [];
    }
    return a
  }, {});

  let data = Object.values(women);

  if (withChildren) {
    people.forEach(person => {
      const mother = person.mother !== null && women[person.mother];
      if (mother) {
        mother.children.push(person.name);
      }
    });
    data = data.filter(person => person.children.length > 0);
  }

  return data.reduce((a, b) => a + b.died - b.born, 0) / data.length;
}

/**
 * Возвращает среднюю разницу в возрасте
 * (год рождения ребёнка - год рождения матери)
 * между всеми матерями и их детьми,
 * которые есть в массиве
 *
 * Если передан `onlyWithSon` то только тех у которых сын
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const peopleData = people.reduce((a, b) => {
    a[b.name] = {...b};
    a[b.name].children = [];
    return a;
  }, {});

  people.forEach(person => {
    const mother = person.mother !== null && peopleData[person.mother];
    if (mother && (!onlyWithSon || person.sex === 'm')) {
      mother.children.push(person.name);
    }
  });

  const data = Object.values(peopleData).filter(person => person.sex === 'f' && person.children.length > 0)

  let totalChildren = 0;

  return data.reduce((a, b) => {
    return a + b.children.reduce((_a, _b) => {
      totalChildren += 1;
      return _a + peopleData[_b].born - b.born
    }, 0)
  }, 0) / totalChildren

}


// ----- Tests ------

test(+calculateMenAverageAge(people).toFixed(2), 62.00, 'Average men age');
test(+calculateMenAverageAge(people, 18).toFixed(2), 56.50, 'Average men age in 18 century');
test(+calculateWomenAverageAge(people).toFixed(2), 55.00, 'Average women age');
test(+calculateWomenAverageAge(people, true).toFixed(2), 54.77, 'Average mothers age');
test(+calculateAverageAgeDiff(people).toFixed(2), 31.38, 'Average age difference');
test(+calculateAverageAgeDiff(people, true).toFixed(2), 30.30, 'Average age difference with son');

function test(actual, expected, testName = '') {
  const message = `Test '${testName}' failed: ${actual} is not equal to expected ${expected}`;
  console.assert(actual === expected, message);
}