'use strict';
const format = new Intl.NumberFormat('es-ES', {useGrouping: 'always'});
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
const year = document.getElementById('anio');
const search = document.getElementById('busqueda');
const table = document.getElementById('perfiles');
const status = document.getElementById('resultados');
function cell(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}
function render() {
  const query = normalize(search.value.trim());
  const rows = window.CATALOGO.perfiles.filter(row => row.anio_referencia === year.value && normalize(`${row.division_codigo} ${row.division_nombre} ${row.sector}`).includes(query));
  table.replaceChildren();
  for (const row of rows) {
    const tr = document.createElement('tr');
    tr.append(cell('td', row.division_codigo), cell('td', row.division_nombre), cell('td', row.sector), cell('td', format.format(Number(row.total_accidentes)), 'number'));
    table.append(tr);
  }
  if (!rows.length) {
    const tr = document.createElement('tr');
    const td = cell('td', 'La búsqueda no encuentra actividades. Pruebe otro nombre o código.');
    td.colSpan = 4; tr.append(td); table.append(tr);
  }
  status.textContent = `${rows.length} de 87 divisiones · Edición ${year.value}${year.value === '2023' ? ' · Cobertura anterior a la incorporación de prácticas formativas no remuneradas.' : ''}`;
}
year.addEventListener('change', render);
search.addEventListener('input', render);
document.getElementById('limpiar').addEventListener('click', () => { search.value = ''; render(); search.focus(); });
for (const [name, definition] of Object.entries(window.CATALOGO.diccionario)) {
  const tr = document.createElement('tr');
  tr.append(cell('td', name), cell('td', definition.tipo), cell('td', definition.significado));
  document.getElementById('campos').append(tr);
}
render();
