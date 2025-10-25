// Use event delegation so dynamically added rows also react to clicks
const appsTable = document.querySelector('.apps-page .table table');
if (appsTable) {
  appsTable.addEventListener('click', function(e) {
    const sel = e.target.closest('.select');
    if (!sel) return;
    // toggle active state on the clicked selector
    sel.classList.toggle('active');
    // find the row and its next sibling detail row
    const row = sel.closest('tr');
    if (!row) return;
    const detailRow = row.nextElementSibling;
    if (detailRow && detailRow.classList.contains('detail')) {
      detailRow.classList.toggle('disable');
    }
  });
}